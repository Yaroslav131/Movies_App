import {
  View, Image, TextInput, Text,
} from 'react-native';
import { useAppSelector } from '@/hooks';
import styles from './styles';

function AppFormField(props: any) {
  const {
    onChangePassword,
    placeholder,
    image: ImageProps,
    field: {
      name, onBlur, onChange, value,
    },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  const theme = useAppSelector((state) => state.theme.value);

  const handleTextChange = (text: string) => {
    if (name === 'password') {
      onChangePassword(text);
    }

    onChange(name)(text);
  };

  return (
    <View style={styles.container}>
      {hasError && <Text style={styles.errorStyle}>{errors[name]}</Text>}

      <View style={styles.InputContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.image} />
        </View>
        <TextInput
          onChangeText={handleTextChange}
          placeholderTextColor={theme.SingInput.placeholderTextColor}
          placeholder={placeholder}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          {...inputProps}
          style={[styles.input,
          { color: theme.SingInput.textColor },
          { borderColor: theme.SingInput.borderColor }]}
        />
      </View>
    </View>
  );
}

export default AppFormField;
