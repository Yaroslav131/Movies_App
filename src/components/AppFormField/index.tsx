import { View, Image, TextInput, useColorScheme, Text } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";

function AppFormField(props: any) {
    const {
        placeholder,
        image: ImageProps,
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];

    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={styles.container}>
            {hasError && <Text style={styles.errorStyle}>{errors[name]}</Text>}

            <View style={styles.InputContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={props.image} />
                </View>
                <TextInput
                    onChangeText={text => onChange(name)(text)}
                    placeholderTextColor={theme.singInput.placeholderTextColor}
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
                    { color: theme.singInput.textColor },
                    { borderColor: theme.singInput.borderColor }]} />
            </View>
        </View>
    );
}

export default AppFormField;