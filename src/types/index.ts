import { ImageProps } from "react-native";

export interface sponsorsDataType {
    image: ImageProps;
}

export interface singInput {
    onChangeText: (e: string | React.ChangeEvent<any>) => void
    onBlur: (e: any) => void
    value: string
    errorText: string | undefined;
    image: ImageProps;
    placeholder: string
    touched: any
}

export interface Theme {
    singUpButton: {
        addAcc: {
            backgroundColor: string;
            color: string;
        };
        googleAcc: {
            backgroundColor: string;
            color: string;
        };
        facebookAcc: {
            backgroundColor: string;
            color: string;
        };
        gitHubAcc: {
            backgroundColor: string;
            color: string;
        };
    };
    welcomScreen: {
        backgroundColor: string;
        color: string;
    };
    modals: {
        backgroundColor: string;
    };
    singInput: {
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
        color: string,
    };
    tabNavigation: {
        backgroundColor: string,
    };
    homeScreen: {
        backgroundColor: string,
        color: string
    },
    filmTopicButton: {
        backgroundColor: string,
        color: string
    },
    horizontalSwiper: {
        backgroundColor: string,
        color: string
    },
    detailScreen: {
        backgroundColor: string,
        buttonBackgroundColor: string,
        color: string,
        iconBackgroundColor: string,
        transparentColor: string;
    },
    commentFormField: {
        placeholderTextColor: string;
        textColor: string;
        borderColor: string;
    },
    bookingFilms: {
        backgroundColor: string,
        color: string,
        borderColor: string,
        sessionButtonColor: string,
        buyButton: string
    },
    seatButton: {
        reserved: string,
        selected: string
        available: string,
        borderColor: string
    },
    calendar: {
        backgroundColor: string,
        textSectionTitleColor: string,
        dayTextColor: string,
        selectedDayBackgroundColor: string,
        textDisabledColor: string,
        monthTextColor: string,
        disableBackground: string,
        selectedBackground: string,
        dateBackground: string,
        color: string
    },
    topScreen: {
        backgroundColor: string,
        color: string,
        searchContainer: string,
        inputColor: string,
        moreButton: string
    },
    filterModal: {
        backgroundColor: string,
        color: string,
        outboundColor: string,
        inboundColor: string,
        borderColor: string,
        resetButtonColor: string
    },
    detailTopScreen: {
        backgroundColor: string,
        color: string,
        lineColor: string,
        titleColor: string
    },
    customUpperTabButton: {
        backgroundColor: string,
        color: string,
        activeColor: string
    },
    ticketScreen: {
        backgroundColor: string,
        color: string,
        itemBackgroundColor: string,
        buttonBackgroundColor: string,
        cancelButtonColor: string
    },
    deleteTicketModal: {
        backgroundColor: string,
        color: string,
        submitButton: string
    }
}

export type passwordComplexityType = "Low" | "Medium" | "High" | "Invalid"

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
    userid: string,
    date: string
}

export type UserType = {
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

export type SeatButtonType = "Available" | "Reserved" | "Selected"

export type TicketFilterType = "upcoming" | "past" | "missed"

export interface ListTicket {
    past: boolean,
    title: string,
    date: string,
    ticketId: string,
    seatCount: number,
    coast: number,
    poster: string
}
