import {
    Image,
    TouchableOpacity,
    Text,
    View,
    useColorScheme,
    Animated
} from "react-native";
import { Field } from 'formik';
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { IMAGES } from "@assets/images";
import {
    CREATE_PASSWORD_PLACE_HOLDER,
    EMAIL_PLACE_HOLDER,
    NAME_PLACE_HOLDER,
    PASSWORD_DIFFICULTY_TEXT,
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
import { useEffect, useState } from "react";
import { passwordComplexityType } from "@/types";
import { checkPasswordComplexity } from "@/helpingFunctions";

interface SingModalProps {
    title: string
    onPress: () => void,
    type: "SingIn" | "SingUp"
}

function SingModal({ onPress, type, title }: SingModalProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    const [fillAnimation] = useState(new Animated.Value(0));
    const [complexity, setComplexity] = useState<passwordComplexityType>("Invalid");

    function handleSetComplexity(password: string) {
        setComplexity(checkPasswordComplexity(password))
    }

    useEffect(() => {
        let duration = 1000;
        let toValue = 0;

        switch (complexity) {
            case "Low":
                duration = 1000;
                toValue = 0.33;
                break;
            case "Medium":
                duration = 1000;
                toValue = 0.66;
                break;
            case "High":
                duration = 1000;
                toValue = 1;
                break;
            default:
                duration = 1000;
                toValue = 0;
                break;
        }

        Animated.timing(fillAnimation, {
            toValue,
            duration,
            useNativeDriver: true,
        }).start();
    }, [complexity]);

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
                        onChangePassword={handleSetComplexity}
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="password"
                        placeholder={CREATE_PASSWORD_PLACE_HOLDER}
                        secureTextEntry
                        textContentType="password"
                    />
                    <View style={styles.difficultyLevelContainer}>
                        <Text style={[styles.difficultyLevelText,
                        { color: theme.singModal.color }]}>
                            {`${PASSWORD_DIFFICULTY_TEXT} ${complexity}`}
                        </Text>
                        <View style={styles.levelBarContainer}>
                            <Animated.View
                                style={[styles.levelBar, {
                                    transform: [{ scaleX: fillAnimation }],
                                }]}
                            />
                        </View>
                    </View>
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