import { FilmCommentsType, passwordComplexityType } from "@/types";
import Sound from 'react-native-sound';

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