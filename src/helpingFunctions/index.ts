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