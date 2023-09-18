import React from 'react';
import { TouchableOpacity, Text, useColorScheme } from 'react-native';
import { useFormikContext } from 'formik';
import styles from './styles';
import { ligthTheme } from '@/theme';

interface AppFormSubmitButtonProps {
    title: string;
}
const AppFormSubmitButton = ({ title }: AppFormSubmitButtonProps) => {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    const { handleSubmit, isValid } = useFormikContext();

    return (
        <TouchableOpacity onPress={() => handleSubmit()} disabled={!isValid}
            style={[styles.singUpButton,
            { backgroundColor: theme.singModal.buttonBackgroundColor }]}>
            <Text style={[styles.singUpButtonText,
            { color: theme.singModal.color }]}>
                {title}
            </Text>
        </TouchableOpacity>

    );
};
export default AppFormSubmitButton;

