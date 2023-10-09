import { IMAGES } from '@assets/images';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Movie } from '@/types';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';
import { StackNavigation } from '@/route/HomeStack/types';

interface MainVideoControlsProps {
    movie: Movie
}

function MainVideoControls(props: MainVideoControlsProps) {
  const navigation = useNavigation<StackNavigation>();
  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  return (
    <>
      <View style={styles.topButtons}>
        <Text style={styles.title}>{translations.FILM_NAME}</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Image source={IMAGES.share} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => { navigation.navigate('Booking', { moive: props.movie }); }}
        style={styles.buyTicktButton}
      >
        <Image style={styles.ticketImage} source={IMAGES.ticket} />
        <Text style={styles.buyTicktText}>{translations.BUY_TICKET}</Text>
      </TouchableOpacity>
    </>
  );
}

export default MainVideoControls;
