import { Text, TouchableOpacity, useColorScheme } from "react-native";
import styles from "./styles";
import {  ligthTheme } from "@/theme";
import { filmCategory } from "@/types";

interface FilmTopicButtonProps {
    film: filmCategory
    chosenTopic: filmCategory
    onClick: (topic: filmCategory) => void
}

function FilmTopicButton(props: FilmTopicButtonProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    return (
        <TouchableOpacity onPress={() => { props.onClick(props.film) }}
            style={[styles.buttonStyle,
            props.film.label === props.chosenTopic.label ?
                { backgroundColor: theme.filmTopicButton.backgroundColor }
                : {}]}>
            <Text style={[styles.textStyle, { color: theme.filmTopicButton.color }]}>{props.film.label}</Text>
        </TouchableOpacity>
    );
}

export default FilmTopicButton;