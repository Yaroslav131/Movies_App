import { Text, View, useColorScheme } from "react-native";
import { styles } from "./styles";
import { ligthTheme } from "@/theme";
import { SeatButtonType } from "@/types";

interface SeatButtonProps {
    type: SeatButtonType,
    text: string
}

function SeatButton(props: SeatButtonProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={styles.container}>
            <View style={[styles.seatButton, {
                backgroundColor: props.type === "Available" ?
                    theme.seatButton.available : (
                        props.type === "Reserved" ?
                            theme.seatButton.reserved :
                            theme.seatButton.selected
                    )
            },
            { borderWidth: props.type === "Available" ? 2 : 0 },
            { borderColor: theme.seatButton.borderColor }]} />
            <Text style={[styles.seatButtonText,
            { color: theme.bookingFilms.color }]}>
                {props.text}
            </Text>
        </View>
    );
}

export default SeatButton;