import { IMAGES } from "@assets/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { BUY_TICKET, FILM_NAME } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "@/route/HomeStack";
import { Movie } from "@/types";

interface MainVideoControlsProps {
    movie: Movie
}

function MainVideoControls(props: MainVideoControlsProps) {

    const navigation = useNavigation<StackNavigation>();
    return (
        <>
            <View style={styles.topButtons}>
                <Text style={styles.title}>{FILM_NAME}</Text>
                <TouchableOpacity style={styles.shareButton}>
                    <Image source={IMAGES.share} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => { navigation.navigate("Booking", { moive: props.movie }) }}
                style={styles.buyTicktButton}>
                <Image style={styles.ticketImage} source={IMAGES.ticket} />
                <Text style={styles.buyTicktText}>{BUY_TICKET}</Text>
            </TouchableOpacity>
        </>
    );
}

export default MainVideoControls;