import { Text, View, useColorScheme, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { COMING_SOON_TEXT, FILM_CATEGORIES, NOW_SHOWING_TEXT } from "@/constants";
import FilmTopicButton from "@/components/FilmTopicButton";
import { useEffect, useState } from "react";

import VideoPlayer from "@/components/VideoPlayer";
import HorizontalSwiper from "@/components/HorizontalSwiper";
import { fetchDataByCategory } from "@/api/rapid";
import { Movie, filmCategory } from "@/types";

import MainVideoControls from "@/components/MainVideoControls";

function HomeScreen() {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    const [chosenTopic, setChosenTopic] = useState<filmCategory>(FILM_CATEGORIES[0])
    const [movies, setMovies] = useState<Movie[] | null>(null)

    useEffect(() => {
        fetchData(chosenTopic)
    }, [])

    async function fetchData(film: filmCategory) {
        const respons = await fetchDataByCategory(film.value)
        setMovies(respons.splice(0, 7))
    }

    function handleSetChosenTopic(film: filmCategory) {
        setChosenTopic(film)
        fetchData(film)
    }

    return (
        <View style={[styles.container,
        { backgroundColor: theme.homeScreen.backgroundColor }]}>
            <View style={styles.topContainer}>
                <Text style={[styles.titleText,
                { color: theme.homeScreen.color }]}>
                    {COMING_SOON_TEXT}
                </Text>
                <View style={styles.videoPlayerConatiner}>
                    <VideoPlayer isPlayerRound={true}>
                        {movies && <MainVideoControls movie={movies[0]} />}
                    </VideoPlayer>
                </View>
                <View style={styles.topicContainer}>
                    {FILM_CATEGORIES.map((x, index) => <FilmTopicButton
                        onClick={handleSetChosenTopic}
                        key={index}
                        chosenTopic={chosenTopic}
                        film={x} />)}
                </View>

            </View>
            <View style={styles.bottomContainer}>
                <Text style={[styles.titleText,
                { color: theme.homeScreen.color }]}>
                    {NOW_SHOWING_TEXT}
                </Text>

                {movies && <HorizontalSwiper movies={movies} />}
            </View>
        </View>
    );
}

export default HomeScreen;