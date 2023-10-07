import { Text, TouchableOpacity } from 'react-native';
import { filmCategory } from '@/types';
import { useAppSelector } from '@/hooks';
import styles from './styles';

interface FilmTopicButtonProps {
    film: filmCategory
    chosenTopic: filmCategory
    onClick: (topic: filmCategory) => void
}

function FilmTopicButton(props: FilmTopicButtonProps) {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <TouchableOpacity
      onPress={() => { props.onClick(props.film); }}
      style={[styles.buttonStyle,
        props.film.label === props.chosenTopic.label
          ? { backgroundColor: theme.filmTopicButton.backgroundColor }
          : {}]}
    >
      <Text style={[styles.textStyle, { color: theme.filmTopicButton.color }]}>{props.film.label}</Text>
    </TouchableOpacity>
  );
}

export default FilmTopicButton;
