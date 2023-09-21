import { Text, TouchableOpacity, useColorScheme } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { filmTopicType } from "@/types";

interface FilmTopicButtonProps {
    title: filmTopicType
    chosenTopic: filmTopicType
    onClick: (topic: filmTopicType) => void
}

function FilmTopicButton(props: FilmTopicButtonProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    return (
        <TouchableOpacity onPress={() => { props.onClick(props.title) }}
            style={[styles.buttonStyle,
            props.title === props.chosenTopic ?
                { backgroundColor: theme.FilmTopicButton.backgroundColor }
                : {}]}>
            <Text style={[styles.textStyle, { color: theme.FilmTopicButton.color }]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default FilmTopicButton;