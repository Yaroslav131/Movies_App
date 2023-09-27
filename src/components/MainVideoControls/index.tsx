import { IMAGES } from "@assets/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { BUY_TICKET, FILM_NAME } from "@/constants";

function MainVideoControls() {
    return (<>
        <View style={styles.topButtons}>
            <Text style={styles.title}>{FILM_NAME}</Text>
            <TouchableOpacity style={styles.shareButton}>
                <Image source={IMAGES.share} />
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            onPress={() => { }}
            style={styles.buyTicktButton}>
            <Image style={styles.ticketImage} source={IMAGES.ticket} />
            <Text style={styles.buyTicktText}>{BUY_TICKET}</Text>
        </TouchableOpacity>
    </>);
}

export default MainVideoControls;