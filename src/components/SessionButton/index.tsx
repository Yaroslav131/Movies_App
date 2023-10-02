import { FilmSession } from "@/types";
import { TouchableOpacity, Text, View, useColorScheme } from "react-native";
import { styles } from "./styles";
import { ligthTheme } from "@/theme";
import { CINEMA, SEATS_AVAILABLE } from "@/constants";
import { Image } from "react-native";
import { IMAGES } from "@assets/images";
import { countAvailableSeatsInSession } from "@/helpingFunctions";

interface SessionButtonProps {
    session: FilmSession
    chosenSessions: string
    handleChooseSession: (id: string) => void
}

function SessionButton(props: SessionButtonProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={styles.sessionButtonContainer}>
            <TouchableOpacity
                style={[styles.sessionButton,
                { backgroundColor: theme.bookingFilms.sessionButtonColor },
                { borderColor: theme.bookingFilms.borderColor },
                { borderWidth: props.session.id === props.chosenSessions ? 3 : 0 }]}
                onPress={() => { props.handleChooseSession(props.session.id) }}>
                <Text style={[styles.timeText,
                { color: theme.bookingFilms.color }]}>
                    {props.session.timeStart} - {props.session.timeEnd}
                </Text>
                <Text style={[styles.cinemaText,
                { color: theme.bookingFilms.color }]}>
                    {CINEMA}: {props.session.cinema}
                </Text>
                <View style={styles.seatsAvailableContainer}>
                    <Image source={IMAGES.recliner} />
                    <Text style={[styles.seatsAvailableText,
                    { color: theme.bookingFilms.color }]}>
                        {countAvailableSeatsInSession(props.session)} {SEATS_AVAILABLE}
                    </Text>
                </View>
            </TouchableOpacity>
        </View >
    );
}

export default SessionButton;