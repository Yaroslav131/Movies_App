import { singInput } from "@/types";
import { View, Image, TextInput, useColorScheme } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";

function SingInput({ image, placeholder, type }: singInput) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>

            <TextInput
                secureTextEntry={type === "Password"}
                placeholderTextColor={theme.singInput.placeholderTextColor}
                placeholder={placeholder}
                style={[styles.input,
                { color: theme.singInput.textColor },
                { borderColor: theme.singInput.borderColor }]} />
        </View>
    );
}

export default SingInput;