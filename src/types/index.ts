import { ImageProps } from "react-native";

export interface sponsorsDataType {

    image: ImageProps;
}

type inputType = "Name" | "Password" | "Mail"


export interface singInput {
    image: ImageProps;
    type: inputType
    placeholder: string
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
}