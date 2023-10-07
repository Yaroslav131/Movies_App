import uuid from 'react-native-uuid';
import {
  FilmCommentsType, FilmSession, ListTicket, Seat, TopMovie, passwordComplexityType,
} from '@/types';
import { CURRENT_LANGUAGE, languageDictionary } from '@/constants';

const translations = languageDictionary[CURRENT_LANGUAGE];

export function getId() {
  return uuid.v1().toString();
}

export function checkPasswordComplexity(password: string): passwordComplexityType {
  const passwordLength = password.length;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialCharacters = /[.,!?/]/.test(password);

  if (passwordLength > 8 && hasUpperCase && hasSpecialCharacters) {
    return 'High';
  } if (passwordLength > 4 && hasUpperCase) {
    return 'Medium';
  } if (passwordLength >= 4) {
    return 'Low';
  }

  return 'Invalid';
}

export function getMiddleIndex(length: number) {
  return Math.floor((length - 2) / 2);
}

export function getMiddleOffset(middleIndex: number, width: number) {
  return (middleIndex * (width / 2));
}

export function getLenghtOffset(length: number, width: number) {
  return ((length - 1) * width / 2) - width / 2;
}

export function convertCommentsObjectToArray(
  commentsObject: Record<string, { comment: string, userId: string, data: string }
  >): FilmCommentsType[] {
  return Object.keys(commentsObject).map((key) => ({
    comment: commentsObject[key].comment,
    userid: commentsObject[key].userId,
    date: commentsObject[key].data.toString(),
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
  } if (months > 0) {
    return `${months}m`;
  } if (days > 0) {
    return `${days}d`;
  } if (hours > 0) {
    return `${hours}h`;
  } if (minutes > 0) {
    return `${minutes}m`;
  }
  return `${seconds}s`;
}

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
  return seatArray.some((seat) => seat.row === seatToFind.row && seat.seatNumber === seatToFind.seatNumber);
}

export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function getFilmSessionsByDate(filmSessions: FilmSession[], date: Date): FilmSession[] {
  const formattedDate = date.toISOString().split('T')[0];
  return filmSessions.filter((session) => session.date == formattedDate);
}

export function isDateInRange(dateToCheck: string, startDate: string, endDate: string): boolean {
  const currentDate = new Date(dateToCheck);
  const rangeStartDate = new Date(startDate);

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
  newSeats: Seat[],
): FilmSession[] {
  return sessions.map((session) => {
    if (session.id === sessionId) {
      const updatedSession = { ...session };
      updatedSession.seats = session.seats.map((seat) => {
        const matchingSeat = newSeats.find(
          (newSeat) => newSeat.row === seat.row && newSeat.seatNumber === seat.seatNumber,
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

export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

export function findMoviesByPartialTitle(movies: TopMovie[], partialTitle: string): TopMovie[] {
  const matchingMovies: TopMovie[] = [];

  for (const movie of movies) {
    if (movie.title.toLowerCase().includes(partialTitle.toLowerCase())) {
      matchingMovies.push(movie);
    }
  }

  return matchingMovies;
}

export const filterMovies = (movies: TopMovie[], options: {
  directorName?: string;
  genreName?: string;
  rankingRange?: [number, number];
  yearsRange?: [number, number];
}): TopMovie[] => {
  const {
    directorName, genreName, rankingRange, yearsRange,
  } = options;

  if (directorName) {
    movies = movies.filter((movie) => movie.director.includes(directorName));
  }

  if (genreName) {
    movies = movies.filter((movie) => movie.genre.includes(genreName));
  }

  if (rankingRange) {
    movies = movies.filter((movie) => {
      const isRankInRange = parseFloat(movie.rating) >= rankingRange[0] && parseFloat(movie.rating) <= rankingRange[1];
      return isRankInRange;
    });
  }

  if (yearsRange) {
    movies = movies.filter((movie) => {
      const isYearInRange = movie.year >= yearsRange[0] && movie.year <= yearsRange[1];
      return isYearInRange;
    });
  }

  return movies;
};

export function getUniqueDirectorsAlphabetically(movies: TopMovie[]): string[] {
  const allDirectors: string[] = [];

  movies.forEach((movie) => {
    allDirectors.push(...movie.director);
  });

  const uniqueDirectors = [...new Set(allDirectors)].sort();

  return uniqueDirectors;
}

export function getUniqueGenresAlphabetically(movies: TopMovie[]): string[] {
  const allGenres: string[] = [];

  movies.forEach((movie) => {
    allGenres.push(...movie.genre);
  });

  const uniqueGenres = [...new Set(allGenres)].sort();

  return uniqueGenres;
}

export const handleCutText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength);
  }
  return text;
};

export function filterUpcomingTickets(tickets: ListTicket[]): ListTicket[] {
  const currentDate = new Date();
  return tickets.filter((ticket) => new Date(ticket.date) > currentDate);
}

export function filterMissedTickets(tickets: ListTicket[]): ListTicket[] {
  const currentDate = new Date();
  return tickets.filter(
    (ticket) => new Date(ticket.date) < currentDate && !ticket.past,
  );
}

export function filterPastTickets(tickets: ListTicket[]): ListTicket[] {
  const currentDate = new Date();
  return tickets.filter(
    (ticket) => new Date(ticket.date) < currentDate && ticket.past,
  );
}

export function formatDateMonthYear(inputDate: string): string {
  const parsedDate = new Date(inputDate);

  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth();

  const formattedDate = `${translations.MONTH_NAMES[month]} ${year}`;

  return formattedDate;
}
