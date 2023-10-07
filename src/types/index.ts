import { ImageProps } from 'react-native';

export interface SingInput {
    onChangeText: (e: string | React.ChangeEvent<any>) => void
    onBlur: (e: any) => void
    value: string
    errorText: string | undefined;
    image: ImageProps;
    placeholder: string
    touched: any
}

interface CommonTheme {
    backgroundColor: string;
    color: string;
}

export interface Theme {
    errorBoudary: CommonTheme;
    singUpButton: {
        addAcc: CommonTheme;
        googleAcc: CommonTheme;
        facebookAcc: CommonTheme;
        gitHubAcc: CommonTheme;
    };
    welcomScreen: CommonTheme;
    modals: CommonTheme;
    SingInput: {
        placeholderTextColor: string;
        textColor: string;
        borderColor: string;
    };
    singModal: {
        headerTextColor: string;
        buttonBackgroundColor: string;
        color: string;
    };
    statusBar: {
        color: string;
    };
    tabNavigation: CommonTheme;
    homeScreen: CommonTheme;
    filmTopicButton: CommonTheme;
    horizontalSwiper: CommonTheme;
    detailScreen: {
        backgroundColor: string;
        buttonBackgroundColor: string;
        color: string;
        iconBackgroundColor: string;
        transparentColor: string;
    };
    commentFormField: {
        placeholderTextColor: string;
        textColor: string;
        borderColor: string;
    };
    bookingFilms: {
        backgroundColor: string;
        color: string;
        borderColor: string;
        sessionButtonColor: string;
        buyButton: string;
    };
    seatButton: {
        reserved: string;
        selected: string;
        available: string;
        borderColor: string;
    };
    calendar: {
        backgroundColor: string;
        textSectionTitleColor: string;
        dayTextColor: string;
        selectedDayBackgroundColor: string;
        textDisabledColor: string;
        monthTextColor: string;
        disableBackground: string;
        selectedBackground: string;
        dateBackground: string;
        color: string;
    };
    topScreen: {
        backgroundColor: string;
        color: string;
        searchContainer: string;
        inputColor: string;
        moreButton: string;
    };
    filterModal: {
        backgroundColor: string;
        color: string;
        outboundColor: string;
        inboundColor: string;
        borderColor: string;
        resetButtonColor: string;
    };
    detailTopScreen: {
        backgroundColor: string;
        color: string;
        lineColor: string;
        titleColor: string;
    };
    customUpperTabButton: {
        backgroundColor: string;
        color: string;
        activeColor: string;
    };
    ticketScreen: {
        backgroundColor: string;
        color: string;
        itemBackgroundColor: string;
        buttonBackgroundColor: string;
        cancelButtonColor: string;
    };
    deleteTicketModal: {
        backgroundColor: string;
        color: string;
        submitButton: string;
    };
    profileScreen: {
        backgroundColor: string;
        color: string;
        menuBackgroundColor: string;
        whiteButton: string;
        whiteButtonText: string;
        blackButton: string;
        blackButtonText: string;
    };
    settingModal: {
        trackColorFalse: string;
        trackColorTrue: string;
        thumbColorIsEnabledTrue: string;
        thumbColorIsEnabledFalse: string;
    };
}

export interface LanguageDictionary {
    NOTIFICATIONS: string;
    WELCOME_TEXT: string;
    SIGNUP_CREATE_ACCOUNT_TEXT: string;
    SIGNIN_TEXT: string;
    SIGNIN_BUTTON_TEXT: string;
    SIGNUP_BUTTON_TEXT: string;
    SIGNUP_CONTINUE_WITH_GOOGLE_TEXT: string;
    SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT: string;
    SIGNUP_SIGNUP_WITH_GITHUB_TEXT: string;
    ALREADY_HAS_ACCOUNT_TEXT: string;
    LOGIN_TEXT: string;
    VERSION_TEXT: string;
    CREATE_ACC_TEXT: string;
    NAME_PLACE_HOLDER: string;
    SERNAME_PLACE_HOLDER: string;
    EMAIL_PLACE_HOLDER: string;
    PASSWORD_PLACE_HOLDER: string;
    CREATE_PASSWORD_PLACE_HOLDER: string;
    NAME_IS_REQUIRED: string;
    EMAIL_IS_REQUIRED: string;
    VALID_EMAIL: string;
    PASSWORD_IS_REQUIRED: string;
    PASSWORD_SMALL_LETTER: string;
    PASSWORD_CAPITAL_LETTER: string;
    PASSWORD_NUMBER: string;
    PASSWORD_MIN_LENGTH: (min: number) => string;
    PASSWORD_DIFFICULTY_TEXT: string;
    COMING_SOON_TEXT: string;
    NOW_SHOWING_TEXT: string;
    FILM_NAME: string;
    BUY_TICKET: string;
    GET_TICKET: string;
    ABOUT: string;
    FILM_CATEGORIES: filmCategory[];
    LESS_TEXT: string;
    MORE_TEXT: string;
    COMMENTS: string;
    COMMENT_IS_REQUIRED: string;
    COMMENT_PLACE_HOLDER: string;
    COMMENT_TOO_LONG: string;
    SEND: string;
    BOKKING_HEADER_TEXT: string;
    SCHEDULE: string;
    DATE: string;
    CINEMA: string;
    SEATS_AVAILABLE: string;
    SEATS: string;
    SCREEN: string;
    SEAT_BUTTONS: SeatButtonType[];
    BOOK_NOW: string;
    CHOOSE_DAY: string;
    SEARCH_MOVIE: string;
    GENRE: string;
    AUTHORS: string;
    MORE: string;
    READ_MORE_TEXT: string;
    TOO_LONG: string;
    FILTERS: string;
    YEAR: string;
    RAITING: string;
    DIRECTORS: string;
    SELECT_LANGUAGE: string;
    SELECT_DIRECTORS: string;
    GENRES: string;
    SELECT_GENRES: string;
    RESET: string;
    FILM_RATING: string;
    ACTORS: string;
    REVIEWS: string;
    DELETE: string;
    BACK: string;
    MONTH_NAMES: string[];
    EDIT_PROFILE_INFO: string;
    SETTINGS: string;
    PRIVATE_POLICY: string;
    LOG_OUT: string;
    CANCEL: string;
    WHITE: string;
    BLACK: string;
    EDIT_PROFILE: string;
    CHANGE_PERSONAL_DATE: string;
    CHANGE_PASSWORD: string;
    EDIT: string;
    ENTER_PASSWORD: string;
    ENTER_NEW_PASSWORD: string;
    PASSWORD_NOT_CORRECT: string;
}
export type passwordComplexityType = 'Low' | 'Medium' | 'High' | 'Invalid'

export type filmCategory = {
    value: string;
    label: string;
};

export interface Movie {
    genre: string[];
    imageurl: string[];
    imdbid: string;
    imdbrating: number;
    released: number;
    synopsis: string;
    title: string;
    type: string;
}

export type FilmCommentsType = {
    comment: string,
    userId: string,
    date: string
}

export type UserType = {
    userId: string,
    firstName: string,
    lastName: string
}

export interface FilmSession {
    id: string,
    coast: number,
    timeStart: string,
    timeEnd: string,
    date: string,
    cinema: string,
    seats: Seat[]
}

export interface Seat {
    ticketId: string,
    isAvailable: boolean,
    row: number,
    seatNumber: number
}

export interface Ticket {
    past: boolean,
    ticketId: string,
    ticketCount: number,
    filmId: string,
    sessionId: string
}

export interface TopMovie {
    rank: number;
    title: string;
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    image: string;
    description: string;
    trailer: string;
    genre: string[];
    director: string[];
    writers: string[];
    imdbid: string;
}

export interface DropButtonItem {
    label: string,
    value: string
}

export interface FilmDitails {
    imdbid: string;
    numVotes: number;
    people: {
        category: string;
        characters: string[] | null;
        job: string | null;
        peopleid: string;
    }[];
    plotSummary: string;
    quotes: string[];
    reviews: string[];
    title: string;
    trailerUrl: string[];
}

export type SeatButtonType = 'Available' | 'Reserved' | 'Selected'

export type TicketFilterType = 'upcoming' | 'past' | 'missed'

export interface ListTicket {
    past: boolean,
    title: string,
    date: string,
    ticketId: string,
    seatCount: number,
    coast: number,
    poster: string
}

export type ThemeType = 'dark' | 'light'

export type LanguagesType = 'en' | 'ru'
