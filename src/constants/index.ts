import { formatDateToYYYYMMDD } from "@/helpingFunctions";
import { FilmSession, Seat, SeatButtonType, filmCategory, sponsorsDataType } from "@/types";
import { IMAGES } from "@assets/images";
import { Dimensions } from "react-native";

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

export const FILM_NAME = "The Batman"
export const BUY_TICKET = "Tickets Available"
export const GET_TICKET = "Get Tickets"

export const FILM_CATEGORIES: filmCategory[] = [
    { value: "drama", label: "Drama" },
    { value: "comedy", label: "Comedy" },
    { value: "action", label: "Action" },
    { value: "fantasy", label: "Fantasy" },
    { value: "animation", label: "Animation" },
];

export const MAX_SYNOPSIS_LENGTH = 100;
export const LESS_TEXT = "less";
export const MORE_TEXT = "more";

export const COMMENTS = "Comments";

export const COMMENT_IS_REQUIRED = 'Comment is required';
export const COMMENT_PLACE_HOLDER = "Your comment"
export const COMMENT_TOO_LONG = "Your comment too long"

export const SEND = "Send"

export const BOKKING_HEADER_TEXT = "Choose Cinema & Seats"
export const SCHEDULE = "Schedule"
export const DATE = "Date"
export const CINEMA = "Cinema"
export const SEATS_AVAILABLE = "Seats available"
export const SEATS = "Seats"
export const SCREEN = "Screen"

export const SEAT_BUTTONS: SeatButtonType[] = ["Available", "Reserved", "Selected"]

export const MOKING_PRICE = 15
export const BOOK_NOW = "Book Now"
export const CHOOSE_DAY = "Choose visiting day"

export const SEARCH_MOVIE = "Search movie in the top"

export const GENRE = "Genre"

export const AUTHORS = "Authors"

export const MORE = "More"

export const TOO_LONG = "Too long"

export const FILTERS = "FILTERS"

export const YEAR = "Year"
export const RAITING = "Raiting"
export const DIRECTORS = "Directors"
export const SELECT_DIRECTORS = "Select derector"
export const GENRES = "Genres"
export const SELECT_GENRES = "Select genre"
export const RESET = "RESET"

export const FILM_RATING = `Film's rating`

export const MIN_FILTER_YEAR = 1920
export const MAX_FILTER_YEAR = new Date().getFullYear()

export const MIN_FILTER_RANING = 0
export const MAX_FILTER_RANING = 10

export const mockFilmSessions: FilmSession[] = [
    {
        id: "1",
        timeStart: "15:00",
        timeEnd: "17:00",
        date: formatDateToYYYYMMDD(new Date()),
        cinema: "Cinema City",
        seats: generateSeats(7, 8)
    },
    {
        id: "2",
        timeStart: "18:30",
        timeEnd: "20:30",
        date: formatDateToYYYYMMDD(new Date()),
        cinema: "Movieplex",
        seats: generateSeats(7, 8)
    },
];

function generateSeats(rows: number, seatsPerRow: number): Seat[] {
    const seats: Seat[] = [];
    for (let row = 1; row <= rows; row++) {
        for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
            seats.push({
                isAvailable: false,
                row,
                ticketId: "",
                seatNumber
            });
        }
    }
    return seats;
}

export const NATIFICATIONS_DELAY = 24