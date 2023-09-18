import { FlatList, Image, TouchableOpacity, Text, View, useColorScheme } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { IMAGES } from "@assets/images";
import { singInput } from "@/types";
import SingInput from "../SingInput";

interface SingModalProps {
    onPress: () => void,
    flatlistData: singInput[],
    buttonText: string,
    headerText: string
}

function SingModal({ onPress, flatlistData, buttonText, headerText }: SingModalProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    const renderInputItem = ({ item }: { item: singInput }) => (
        <SingInput
            image={item.image}
            placeholder={item.placeholder}
            type={item.type}
        />
    );

    const keyExtractor = (item: singInput, index: number) => index.toString();

    return (
        <View style={[styles.container,
        { backgroundColor: theme.modals.backgroundColor }]}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={[styles.headerText,
                    { color: theme.singModal.color }]}>{headerText}</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={styles.cancelContainer}>
                    <Image source={IMAGES.cancel} />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.singInputFlatList}
                data={flatlistData}
                renderItem={renderInputItem}
                keyExtractor={keyExtractor}
            />
            <TouchableOpacity onPress={onPress}
                style={[styles.singUpButton,
                { backgroundColor: theme.singModal.buttonBackgroundColor }]}>
                <Text style={[styles.singUpButtonText,
                { color: theme.singModal.color }]}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View >
    );
}

export default SingModal;