import { Image, ImageProps, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface SingUpButtonProps {
    onClick: () => void
    buttonText: string,
    image: ImageProps,
    colors: {
        backgroundColor: string,
        color: string
    }
}

function SingUpButton({ image, colors, buttonText, onClick }: SingUpButtonProps) {
    return (
        <TouchableOpacity
            onPress={onClick} style={[styles.container,
            { backgroundColor: colors.backgroundColor }]}>
            <View style={styles.buttonImageContainer}>
                <Image style={styles.imageStyle} source={image} />
            </View>
            <View style={styles.buttonTextContainer}>
                <Text style={[styles.buttonText,
                { color: colors.color }]}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SingUpButton;