import {
  View, TextInput, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { useEffect, useState } from 'react';
import Snackbar from 'react-native-snackbar';
import styles from './styles';

import { DropButtonItem, TopMovie } from '@/types';
import { getTop100Movies } from '@/api/rapid';
import {
  filterMovies, findMoviesByPartialTitle, getUniqueDirectorsAlphabetically, getUniqueGenresAlphabetically,
} from '@/helpingFunctions';
import ModalContainer from '@/components/ModalContainer';
import FilterModal from '@/components/FilterModal';
import TopFilmFlatListItem from '@/components/TopFilmFlatListItem';
import {
  MAX_FILTER_RANING, MAX_FILTER_YEAR, MIN_FILTER_RANING, MIN_FILTER_YEAR, languageDictionary,
} from '@/constants';
import { validationSchema } from './constans';
import { useAppSelector } from '@/hooks';

function TopFilmsScreen() {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  const [searchInput, setSearchInput] = useState('');
  const [topMovies, setTopMovies] = useState<TopMovie[]>([]);
  const [filteredtopMovies, setFilteredtopMovies] = useState<TopMovie[]>([]);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [rankingRage, setRankingRage] = useState<[number, number]>([MIN_FILTER_RANING, MAX_FILTER_RANING]);
  const [yearsRage, setYearsRage] = useState<[number, number]>([MIN_FILTER_YEAR, MAX_FILTER_YEAR]);
  const [directorName, setDirectorName] = useState<string>('');
  const [genre, setGenre] = useState<string>('');

  function onChangeDirector(director: string) {
    setFilteredtopMovies(filterMovies(
      topMovies,
      {
        directorName: director,
        genreName: genre,
        rankingRange: rankingRage,
        yearsRange: yearsRage,
      },
    ));
    setDirectorName(director);
  }

  function handleResetFilter() {
    setFilteredtopMovies(topMovies);
    setRankingRage([MIN_FILTER_RANING, MAX_FILTER_RANING]);
    setYearsRage([MIN_FILTER_YEAR, MAX_FILTER_YEAR]);
    setDirectorName('');
    setGenre('');
  }
  function onChangeGenre(genre: string) {
    setFilteredtopMovies(filterMovies(
      topMovies,
      {
        directorName,
        genreName: genre,
        rankingRange: rankingRage,
        yearsRange: yearsRage,
      },
    ));
    setGenre(genre);
  }

  function onChangeRankinkRage(range: [number, number]) {
    setFilteredtopMovies(filterMovies(
      topMovies,
      {
        directorName,
        genreName: genre,
        rankingRange: range,
        yearsRange: yearsRage,
      },
    ));
    setRankingRage(range);
  }

  function onChangeYearsRage(range: [number, number]) {
    setFilteredtopMovies(filterMovies(
      topMovies,
      {
        directorName,
        genreName: genre,
        rankingRange: rankingRage,
        yearsRange: range,
      },
    ));
    setYearsRage(range);
  }

  useEffect(() => {
    async function fetchData() {
      const result = await getTop100Movies();
      setTopMovies(result);
      setFilteredtopMovies(result);
    }

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: TopMovie }) => (
    <TopFilmFlatListItem
      description={item.description}
      director={item.director}
      genre={item.genre}
      id={item.id}
      image={item.image}
      imdbid={item.imdbid}
      rank={item.rank}
      rating={item.rating}
      thumbnail={item.thumbnail}
      title={item.title}
      trailer={item.trailer}
      writers={item.writers}
      year={item.year}
    />
  );

  function tonggleModalVisible() {
    setIsDateModalVisible(!isDateModalVisible);
  }

  const handleSubmit = () => {
    validationSchema
      .validate({ searchInput })
      .then(() => {
        if (searchInput !== '') {
          setFilteredtopMovies(findMoviesByPartialTitle(topMovies, searchInput));
        }
      })
      .catch((error) => {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_LONG,
        });
      });
  };

  return (
    <View style={[styles.container,
      { backgroundColor: theme.topScreen.backgroundColor }]}
    >
      <View style={[styles.searchContainer,
        { backgroundColor: theme.topScreen.searchContainer }]}
      >
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.headerImageContainer}
        >
          <Image source={IMAGES.searchIcon} />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>

          <TextInput
            onSubmitEditing={handleSubmit}
            onChangeText={(text) => {
              setSearchInput(text);
            }}
            value={searchInput}
            placeholder={translations.SEARCH_MOVIE}
            style={[styles.textInput,
              { color: theme.topScreen.inputColor }]}
          />
        </View>
        <TouchableOpacity
          onPress={tonggleModalVisible}
          style={styles.headerImageContainer}
        >
          <Image source={IMAGES.settingIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        data={filteredtopMovies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <ModalContainer
        isModalVisible={isDateModalVisible}
        toggleModal={tonggleModalVisible}
      >
        <FilterModal
          selectedDirector={directorName}
          selectedGenre={genre}
          handleResetFilter={handleResetFilter}
          directors={getUniqueDirectorsAlphabetically(topMovies)
            .map((director) => ({ label: director, value: director } as DropButtonItem))}
          genres={getUniqueGenresAlphabetically(topMovies)
            .map((genre) => ({ label: genre, value: genre } as DropButtonItem))}
          onChangeDirector={onChangeDirector}
          onChangeGenre={onChangeGenre}
          rankingRage={rankingRage}
          yearsRage={yearsRage}
          onChangeRankinkRage={onChangeRankinkRage}
          onChangeYearsRage={onChangeYearsRage}
          onClose={tonggleModalVisible}
        />
      </ModalContainer>
    </View>
  );
}

export default TopFilmsScreen;
