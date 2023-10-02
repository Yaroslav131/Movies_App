import { FilmCommentsType, FilmSession, Seat, passwordComplexityType } from "@/types";
import Sound from 'react-native-sound';
import uuid from 'react-native-uuid';

export function getId() {
    return uuid.v4().toString();
  }

export function checkPasswordComplexity(password: string): passwordComplexityType {
    const passwordLength = password.length;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialCharacters = /[.,!?/]/.test(password);

    if (passwordLength > 8 && hasUpperCase && hasSpecialCharacters) {
        return "High";
    } else if (passwordLength > 4 && hasUpperCase) {
        return "Medium";
    } else if (passwordLength >= 4) {
        return "Low";
    }
    else {
        return "Invalid";
    }
}

export function getMiddleIndex(length: number) {
    return Math.floor((length - 2) / 2)
}

export function getMiddleOffset(middleIndex: number, width: number) {
    return (middleIndex * (width / 2))
}

export function getLenghtOffset(length: number, width: number) {
    return ((length - 1) * width / 2) - width / 2
}

export function convertCommentsObjectToArray(commentsObject: Record<string, { comment: string, userId: string, data: string }>): FilmCommentsType[] {
    return Object.keys(commentsObject).map((key) => ({
        comment: commentsObject[key].comment,
        userid: commentsObject[key].userId,
        date: commentsObject[key].data.toString()
    }));
}

export function timeAgo(date: string): string {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - new Date(date).getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return `${years}y`;
    } else if (months > 0) {
        return `${months}m`;
    } else if (days > 0) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return `${seconds}s`;
    }
}

// export function playSound() {
//     const soundFile = new Sound('comment_sound.mp3', Sound.MAIN_BUNDLE, error => {
//         if (error) {
//             console.log('Не удалось загрузить звук:', error);
//         }
//     });

//     if (soundFile.isLoaded()) {
//         soundFile.play(success => {
//             if (success) {
//                 console.log('Звук воспроизведен успешно');
//             } else {
//                 console.log('Не удалось воспроизвести звук');
//             }
//         });
//     } else {
//         console.log('Звук не загружен');
//     }
// }

export function divideSeatsBySeatNumber(seats: Seat[]): [Seat[], Seat[]] {
    const seatsArray1: Seat[] = [];
    const seatsArray2: Seat[] = [];

    for (const seat of seats) {
        if (seat.seatNumber >= 1 && seat.seatNumber <= 4) {
            seatsArray1.push(seat);
        } else if (seat.seatNumber >= 5 && seat.seatNumber <= 8) {
            seatsArray2.push(seat);
        }
    }


    return [seatsArray1, seatsArray2];
}

export function isSeatInArray(seatToFind: Seat, seatArray: Seat[]): boolean {
    return seatArray.some(seat => seat.row === seatToFind.row && seat.seatNumber === seatToFind.seatNumber);
}

export function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function getFilmSessionsByDate(filmSessions: FilmSession[], date: Date): FilmSession[] {
    const formattedDate = date.toISOString().split('T')[0];
    return filmSessions.filter(session => session.date == formattedDate);
}

export function isDateInRange(dateToCheck: string, startDate: string, endDate: string): boolean {
    const currentDate = new Date(dateToCheck);
    let rangeStartDate = new Date(startDate);

    rangeStartDate.setDate(rangeStartDate.getDate() - 1);

    const rangeEndDate = new Date(endDate);

    return currentDate >= rangeStartDate && currentDate <= rangeEndDate;
}

export function formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function updateSeatsInFilmSessions(
    ticketId: string,
    sessions: FilmSession[],
    sessionId: string,
    newSeats: Seat[]
): FilmSession[] {
    return sessions.map((session) => {
        if (session.id === sessionId) {
            const updatedSession = { ...session };
            updatedSession.seats = session.seats.map((seat) => {
                const matchingSeat = newSeats.find(
                    (newSeat) =>
                        newSeat.row === seat.row && newSeat.seatNumber === seat.seatNumber
                );
                if (matchingSeat) {
                    return { ...seat, ticketId, isAvailable: false };
                }
                return seat;
            });
            return updatedSession;
        }
        return session;
    });
}


export function countAvailableSeatsInSession(session: FilmSession): number {
    const availableSeats = session.seats.filter((seat) => seat.isAvailable === true);
    return availableSeats.length;
}