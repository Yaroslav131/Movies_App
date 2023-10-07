import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { styles } from './styles';

import { FilmSession } from '@/types';
import { countAvailableSeatsInSession } from '@/helpingFunctions';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';

interface SessionButtonProps {
    session: FilmSession
    chosenSessions: string
    handleChooseSession: (id: string) => void
}

function SessionButton(props: SessionButtonProps) {
  const theme = useAppSelector((state) => state.theme.value);

  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  return (
    <View style={styles.sessionButtonContainer}>
      <TouchableOpacity
        style={[styles.sessionButton,
          { backgroundColor: theme.bookingFilms.sessionButtonColor },
          { borderColor: theme.bookingFilms.borderColor },
          { borderWidth: props.session.id === props.chosenSessions ? 3 : 0 }]}
        onPress={() => { props.handleChooseSession(props.session.id); }}
      >
        <Text style={[styles.timeText,
          { color: theme.bookingFilms.color }]}
        >
          {props.session.timeStart}
          {' '}
          -
          {props.session.timeEnd}
        </Text>
        <Text style={[styles.cinemaText,
          { color: theme.bookingFilms.color }]}
        >
          {translations.CINEMA}
          :
          {props.session.cinema}
        </Text>
        <View style={styles.seatsAvailableContainer}>
          <Image source={IMAGES.recliner} />
          <Text style={[styles.seatsAvailableText,
            { color: theme.bookingFilms.color }]}
          >
            {countAvailableSeatsInSession(props.session)}
            {' '}
            {translations.SEATS_AVAILABLE}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SessionButton;
