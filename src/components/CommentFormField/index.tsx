import {
  View, Image, TextInput, Text,
} from 'react-native';
import { useFormikContext } from 'formik';
import styles from './styles';
import UserAvatar from '../UserAvatar';
import { useAppSelector } from '@/hooks';

function CommentFormField(props: any) {
  const {
    placeholder,
    userName,
    userLastName,
    field: {
      name, onBlur, onChange, value,
    },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  const { handleSubmit, isValid } = useFormikContext();

  const theme = useAppSelector((state) => state.theme.value);

  return (
    <View style={styles.container}>
      {hasError && <Text style={styles.errorStyle}>{errors[name]}</Text>}
      <View style={styles.commentContainer}>
        <UserAvatar firstName={userName} lastName={userLastName} />
        <TextInput
          onChangeText={(text) => {
            onChange(name)(text);
          }}
          placeholderTextColor={theme.commentFormField.placeholderTextColor}
          placeholder={placeholder}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
            isValid && handleSubmit();
          }}
          autoCapitalize="none"
          autoCorrect
          value={value}
          {...inputProps}
          style={[styles.input,
            { color: theme.commentFormField.textColor },
            { borderColor: theme.commentFormField.borderColor }]}
        />

      </View>
    </View>
  );
}

export default CommentFormField;
