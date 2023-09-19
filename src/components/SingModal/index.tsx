import {
    Image,
    TouchableOpacity,
    Text,
    View,
    useColorScheme
} from "react-native";
import { Field } from 'formik';
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { IMAGES } from "@assets/images";
import {
    CREATE_PASSWORD_PLACE_HOLDER,
    EMAIL_PLACE_HOLDER,
    NAME_PLACE_HOLDER,
    PASSWORD_PLACE_HOLDER,
    SERNAME_PLACE_HOLDER,
    SIGNIN_BUTTON_TEXT,
    SIGNUP_BUTTON_TEXT,
} from "@/constants";

import AppFormField from "../AppFormField";
import AppForm from "../AppForm";
import AppFormSubmitButton from "../AppFormSubmitButton";
import { validationSingInSchema, validationSingUpSchema } from "./constans";
import { handleEmailSignIn, handleEmailSingUp } from "@/api/firebase";

interface SingModalProps {
    title: string
    onPress: () => void,
    type: "SingIn" | "SingUp"
}

function SingModal({ onPress, type, title }: SingModalProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={[styles.container,
        { backgroundColor: theme.modals.backgroundColor }]}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={[styles.headerText,
                    { color: theme.singModal.color }]}>{title}</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={styles.cancelContainer}>
                    <Image source={IMAGES.cancel} />
                </TouchableOpacity>
            </View>
            {type === "SingUp" ?
                <AppForm
                    initialValues={{ name: '', sername: "", email: '', password: '' }}
                    validationSchema={validationSingUpSchema}
                    onSubmit={(values: { name: string, sername: string, email: string, password: string }) => {
                        handleEmailSingUp(values.email, values.password, values.name, values.sername);
                        onPress();
                    }}>

                    <Field
                        image={IMAGES.yourName}
                        component={AppFormField}
                        name="name"
                        placeholder={NAME_PLACE_HOLDER} />
                    <Field
                        image={IMAGES.yourSername}
                        component={AppFormField}
                        name="sername"
                        placeholder={SERNAME_PLACE_HOLDER} />
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="email"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        placeholder={EMAIL_PLACE_HOLDER} />
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="password"
                        placeholder={CREATE_PASSWORD_PLACE_HOLDER}
                        secureTextEntry
                        textContentType="password"
                    />

                    <AppFormSubmitButton title={SIGNUP_BUTTON_TEXT} />
                </AppForm> :
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSingInSchema}
                    onSubmit={(values: { name: string, sername: string, email: string, password: string }) => {
                        handleEmailSignIn(values.email, values.password)
                        onPress();
                    }}>
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="email"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        placeholder={EMAIL_PLACE_HOLDER} />
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="password"
                        placeholder={PASSWORD_PLACE_HOLDER}
                        secureTextEntry
                        textContentType="password"
                    />

                    <AppFormSubmitButton title={SIGNIN_BUTTON_TEXT} />
                </AppForm>
            }

        </View >
    );
}

export default SingModal;