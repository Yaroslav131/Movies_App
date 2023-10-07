import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useFormikContext } from 'formik';
import styles from './styles';
import { useAppSelector } from '@/hooks';

interface AppFormSubmitButtonProps {
    title: string;
}
function AppFormSubmitButton({ title }: AppFormSubmitButtonProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      disabled={!isValid}
      style={[styles.singUpButton,
        { backgroundColor: theme.singModal.buttonBackgroundColor }]}
    >
      <Text style={[styles.singUpButtonText,
        { color: theme.singModal.color }]}
      >
        {title}
      </Text>
    </TouchableOpacity>

  );
}
export default AppFormSubmitButton;
