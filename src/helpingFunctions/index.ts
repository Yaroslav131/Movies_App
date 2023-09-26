import { passwordComplexityType } from "@/types";

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
    return Math.floor((length-2) / 2)
}

export function getMiddleOffset(middleIndex: number, width: number) {
    return (middleIndex * (width / 2))
}

export function getLenghtOffset(length: number, width: number) {
    return ((length - 1) * width / 2) - width / 2
}