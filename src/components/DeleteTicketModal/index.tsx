import {
    Image,
    TouchableOpacity,
    Text,
    View,
    useColorScheme,
} from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { IMAGES } from "@assets/images";
import { BACK, DELETE } from "@/constants";


interface DeleteTicketModalProps {
    onCloseModal: () => void,
    onSubmit: () => void,
}

function DeleteTicketModal({ onSubmit, onCloseModal }: DeleteTicketModalProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={[styles.container,
        { backgroundColor: theme.deleteTicketModal.backgroundColor }]}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={[styles.headerText,
                    { color: theme.singModal.color }]}>
                        {`${DELETE}?`}
                    </Text>
                </View>
                <TouchableOpacity onPress={onCloseModal} style={styles.cancelContainer}>
                    <Image source={IMAGES.cancel} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={()=>{
                onSubmit()
                onCloseModal()
            }}
            style={[styles.buttonStyle,
            { backgroundColor: theme.deleteTicketModal.submitButton }]}>
                <Text style={[styles.submitText,
                { color: theme.singModal.color }]}>
                    {DELETE}
                </Text>
            </TouchableOpacity>
        </View >
    );
}

export default DeleteTicketModal;