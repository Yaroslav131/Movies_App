import { Text, View, useColorScheme } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { COMING_SOON_TEXT, FILM_TOPICS, NOW_SHOWING_TEXT } from "@/constants";
import FilmTopicButton from "@/components/FilmTopicButton";
import { useState } from "react";
import { filmTopicType } from "@/types";
import VideoPlayer from "@/components/VideoPlayer";

function HomeScreen() {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    const [chosenTopic, setChosenTopic] = useState<filmTopicType>("Action")

    function handleSetChosenTopic(topic: filmTopicType) {
        setChosenTopic(topic)
    }
    return (
        <View style={[styles.container,
        { backgroundColor: theme.homeScreen.backgroundColor }]}>
            <View style={styles.topContainer}>
                <Text style={[styles.titleText,
                { color: theme.homeScreen.color }]}>
                    {COMING_SOON_TEXT}
                </Text>

                <VideoPlayer />

                <View style={styles.topicContainer}>
                    {FILM_TOPICS.map((x, index) => <FilmTopicButton
                        onClick={handleSetChosenTopic}
                        key={index}
                        chosenTopic={chosenTopic}
                        title={x as filmTopicType} />)}
                </View>

            </View>
            <View style={styles.bottomContainer}>
                <Text style={[styles.titleText,
                { color: theme.homeScreen.color }]}>
                    {NOW_SHOWING_TEXT}
                </Text>
            
            </View>
        </View>
    );
}

export default HomeScreen;