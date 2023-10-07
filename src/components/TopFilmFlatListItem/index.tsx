import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { toUpperCase } from '@/helpingFunctions';
import { TopMovie } from '@/types';
import { StackNavigation } from '@/route/TopFilmRoot/TopFilmStack';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';

function TopFilmFlatListItem(item: TopMovie) {
  const navigation = useNavigation<StackNavigation>();
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  return (
    <View style={styles.movieItemContainer}>
      <View style={styles.posterContainer}>
        <Image style={styles.poster} source={{ uri: item.image }} />
      </View>

      <View style={styles.informContainer}>
        <Text style={[styles.filmTitle,
          { color: theme.topScreen.color }]}
        >
          {toUpperCase(`${item.rank}. ${item.title}`)}
        </Text>
        <Text style={[styles.description,
          { color: theme.topScreen.color }]}
        >
          {translations.GENRE}
          :
          {item.genre.join(', ')}
        </Text>
        <Text style={[styles.description,
          { color: theme.topScreen.color }]}
        >
          {translations.AUTHORS}
          :
          {item.director.join(', ')}
        </Text>
        <View style={styles.runkContainer}>
          <Text style={[styles.filmTitle,
            { color: theme.topScreen.color }]}
          >
            {item.rating}
          </Text>
          <View style={styles.runkContainer}>
            <Image style={styles.starImageContainer} source={IMAGES.starIcon} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { moive: item })}
          style={[styles.moreButton,
            { backgroundColor: theme.topScreen.moreButton }]}
        >
          <Text style={[styles.moreButtonText,
            { color: theme.topScreen.color }]}
          >
            {translations.MORE}
          </Text>
          <Image source={IMAGES.arrowMore} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopFilmFlatListItem;
