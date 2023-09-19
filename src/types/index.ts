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
    }

}
