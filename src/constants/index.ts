import { sponsorsDataType } from "@/types";
import { IMAGES } from "@assets/images";

export const SPONSERS_DATA: sponsorsDataType[] = [
    {
        image: IMAGES.marvelIcon
    },
    {
        image: IMAGES.dcIcon
    },
    {
        image: IMAGES.warnerIcon
    },
    {
        image: IMAGES.netflixIcon
    },
];
export const WELCOME_TEXT = "Great Movies in the best cinema! We care about your comfort.";

export const SIGNUP_CREATE_ACCOUNT_TEXT = "Create an Account";
export const SIGNIN_TEXT = "Sign in to an account";
export const SIGNIN_BUTTON_TEXT = "Sign in";

export const SIGNUP_BUTTON_TEXT = "Sing Up"
export const SIGNUP_CONTINUE_WITH_GOOGLE_TEXT = "Continue with Google";
export const SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT = "Continue with Facebook";
export const SIGNUP_SIGNUP_WITH_GITHUB_TEXT = "Sign up with GitHub";
export const ALREADY_HAS_ACCOUNT_TEXT = "Already has an account? ";

export const LOGIN_TEXT = " Login please."
export const VERSION_TEXT = "2023 Version 0.0.1."
export const CREATE_ACC_TEXT = "Create an account"

export const NAME_PLACE_HOLDER = "Enter your name"
export const SERNAME_PLACE_HOLDER = "Enter your sername"
export const EMAIL_PLACE_HOLDER = "Enter your email"
export const PASSWORD_PLACE_HOLDER = "Enter your password"
export const CREATE_PASSWORD_PLACE_HOLDER = "Enter strong password"


export const NAME_IS_REQUIRED = 'Name is required';
export const EMAIL_IS_REQUIRED = 'Email is required';
export const VALID_EMAIL = 'Please enter a valid email';
export const PASSWORD_IS_REQUIRED = 'Password is required';
export const PASSWORD_SMALL_LETTER = 'Password must have a lowercase letter';
export const PASSWORD_CAPITAL_LETTER = 'Password must have an uppercase letter';
export const PASSWORD_NUMBER = 'Password must have a number';
export const PASSWORD_MIN_LENGTH = (min: number) => `Password must be at least ${min} characters`;

export const PASSWORD_DIFFICULTY_TEXT = "Password complexity:"

export const COMING_SOON_TEXT = "Coming Soon"
export const NOW_SHOWING_TEXT = "Now Showing"

export const FILM_TOPICS = ["Action", "Comedy", "Romance", "Thiller", "Fantasy"]

export const FILM_NAME = "The Batman"
export const BUY_TICKET = "Tickets Available"