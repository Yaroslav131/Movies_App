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
    SIGNIN_BUTTON_TEXT,
    SIGNUP_BUTTON_TEXT,
} from "@/constants";

import AppFormField from "../AppFormField";
import AppForm from "../AppForm";
import AppFormSubmitButton from "../AppFormSubmitButton";
import { validationSingInSchema, validationSingUpSchema } from "./constans";

interface SingModalProps {
    title:string
    onPress: () => void,
    type: "SingIn" | "SingUp"
}

function SingModal({ onPress, type,title }: SingModalProps) {
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
                    onSubmit={(values: any) => console.log(values)}>

                    <Field
                        image={IMAGES.yourName}
                        component={AppFormField}
                        name="name"
                        placeholder="Enter your name" />
                    <Field
                        image={IMAGES.yourSername}
                        component={AppFormField}
                        name="sername"
                        placeholder="Enter your sername" />
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="email"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        placeholder="Enter your email" />
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="password"
                        placeholder="Enter strong password"
                        secureTextEntry
                        textContentType="password"
                    />

                    <AppFormSubmitButton title={SIGNUP_BUTTON_TEXT} />
                </AppForm> :
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSingInSchema}
                    onSubmit={(values: any) => console.log(values)}>

                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="email"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        placeholder="Enter your email" />
                    <Field
                        image={IMAGES.yourEmail}
                        component={AppFormField}
                        name="password"
                        placeholder="Enter your password"
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