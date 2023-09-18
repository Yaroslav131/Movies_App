import { Image, TouchableOpacity, Text, View, useColorScheme } from "react-native";
import { Formik } from 'formik';
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { IMAGES } from "@assets/images";
import SingInput from "../AppFormField";
import { SIGNIN_BUTTON_TEXT, SIGNIN_TEXT, } from "@/constants";

interface SingInModalProps {
    onPress: () => void,
}

function SingInModal({ onPress }: SingInModalProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={[styles.container,
        { backgroundColor: theme.modals.backgroundColor }]}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={[styles.headerText,
                    { color: theme.singModal.color }]}>{SIGNIN_TEXT}</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={styles.cancelContainer}>
                    <Image source={IMAGES.cancel} />
                </TouchableOpacity>
            </View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <>

                        <View>
                            <SingInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                image={IMAGES.yourEmail}
                                placeholder={"Enter your email"}
                                type={"Mail"}
                            />
                            <SingInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                image={IMAGES.yourPassword}
                                placeholder={"Enter strong password"}
                                type={"PasswordCreate"}
                            />
                        </View>

                        <TouchableOpacity onPress={() => {
                            onPress()
                            handleSubmit()
                        }}
                            style={[styles.singUpButton,
                            { backgroundColor: theme.singModal.buttonBackgroundColor }]}>
                            <Text style={[styles.singUpButtonText,
                            { color: theme.singModal.color }]}>
                                {SIGNIN_BUTTON_TEXT}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View >
    );
}

export default SingInModal;