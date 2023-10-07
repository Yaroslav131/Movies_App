import { Text, View, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import FilmTopicButton from '@/components/FilmTopicButton';
import VideoPlayer from '@/components/VideoPlayer';
import HorizontalSwiper from '@/components/HorizontalSwiper';
import { fetchDataByCategory } from '@/api/rapid';
import { Movie, filmCategory } from '@/types';
import MainVideoControls from '@/components/MainVideoControls';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';
import styles from './styles';

function HomeScreen() {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;
  const translations = languageDictionary[currentLanguage];

  const [chosenTopic, setChosenTopic] = useState<filmCategory>(translations.FILM_CATEGORIES[0]);
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetchData(chosenTopic);
  }, []);

  async function fetchData(film: filmCategory) {
    const respons = await fetchDataByCategory(film.value);
    setMovies(respons.splice(0, 7));
  }

  function handleSetChosenTopic(film: filmCategory) {
    setChosenTopic(film);
    fetchData(film);
  }

  return (
    <>
      <StatusBar backgroundColor={theme.homeScreen.backgroundColor} />
      <View style={[styles.container,
        { backgroundColor: theme.homeScreen.backgroundColor }]}
      >
        <View style={styles.topContainer}>
          <Text style={[styles.titleText,
            { color: theme.homeScreen.color }]}
          >
            {translations.COMING_SOON_TEXT}
          </Text>
          <View style={styles.videoPlayerConatiner}>
            <VideoPlayer isPlayerRound>
              {movies && <MainVideoControls movie={movies[0]} />}
            </VideoPlayer>
          </View>
          <View style={styles.topicContainer}>
            {translations.FILM_CATEGORIES.map((film, index) => (
              <FilmTopicButton
                onClick={handleSetChosenTopic}
                key={index}
                chosenTopic={chosenTopic}
                film={film}
              />
            ))}
          </View>

        </View>
        <View style={styles.bottomContainer}>
          <Text style={[styles.titleText,
            { color: theme.homeScreen.color }]}
          >
            {translations.NOW_SHOWING_TEXT}
          </Text>

          {movies && <HorizontalSwiper movies={movies} />}
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
