import { View, useColorScheme, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";

import { StackNavigation } from "@/route/TopFilmStack";
import { useNavigation } from "@react-navigation/native";
import { IMAGES } from "@assets/images";
import { AUTHORS, GENRE, MAX_FILTER_RANING, MAX_FILTER_YEAR, MIN_FILTER_RANING, MIN_FILTER_YEAR, MORE, SEARCH_MOVIE, TOO_LONG } from "@/constants";
import { useEffect, useState } from "react";
import { DropButtonItem, TopMovie } from "@/types";
import { getTop100Movies } from "@/api/rapid";
import { filterMovies, findMoviesByPartialTitle, getUniqueDirectorsAlphabetically, getUniqueGenresAlphabetically, toUpperCase } from "@/helpingFunctions";
import * as Yup from 'yup';
import Snackbar from "react-native-snackbar";
import ModalContainer from "@/components/ModalContainer";
import FilterModal from "@/components/FilterModal";
import TopFilmFlatListItem from "@/components/TopFilmFlatListItem";

const validationSchema = Yup.object().shape({
    searchInput: Yup.string()
        .max(15, TOO_LONG),
});

function TopFilmsScreen() {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    const [searchInput, setSearchInput] = useState("")
    const [topMovies, setTopMovies] = useState<TopMovie[]>([])
    const [filteredtopMovies, setFilteredtopMovies] = useState<TopMovie[]>([])
    const [isDateModalVisible, setIsDateModalVisible] = useState(false)
    const [rankingRage, setRankingRage] = useState<[number, number]>([MIN_FILTER_RANING, MAX_FILTER_RANING])
    const [yearsRage, setYearsRage] = useState<[number, number]>([MIN_FILTER_YEAR, MAX_FILTER_YEAR])
    const [directorName, setDirectorName] = useState<string>("")
    const [genre, setGenre] = useState<string>("")

    function onChangeDirector(director: string) {
        setFilteredtopMovies(filterMovies(
            topMovies,
            {
                directorName: director,
                genreName: genre,
                rankingRange: rankingRage,
                yearsRange: yearsRage
            }))
        setDirectorName(director)
    }

    function handleResetFilter() {
        setFilteredtopMovies(topMovies)
        setRankingRage([MIN_FILTER_RANING, MAX_FILTER_RANING])
        setYearsRage([MIN_FILTER_YEAR, MAX_FILTER_YEAR])
        setDirectorName("")
        setGenre("")
    }
    function onChangeGenre(genre: string) {
        setFilteredtopMovies(filterMovies(
            topMovies,
            {
                directorName: directorName,
                genreName: genre,
                rankingRange: rankingRage,
                yearsRange: yearsRage
            }))
        setGenre(genre)
    }

    function onChangeRankinkRage(range: [number, number]) {
        setFilteredtopMovies(filterMovies(
            topMovies,
            {
                directorName: directorName,
                genreName: genre,
                rankingRange: range,
                yearsRange: yearsRage
            }))
        setRankingRage(range)
    }

    function onChangeYearsRage(range: [number, number]) {
        setFilteredtopMovies(filterMovies(
            topMovies,
            {
                directorName: directorName,
                genreName: genre,
                rankingRange: rankingRage,
                yearsRange: range
            }))
        setYearsRage(range)
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getTop100Movies();
            setTopMovies(result);
            setFilteredtopMovies(result)
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
            year={item.year} />
    );

    function tonggleModalVisible() {
        setIsDateModalVisible(!isDateModalVisible)
    }

    const handleSubmit = () => {
        validationSchema
            .validate({ searchInput })
            .then(() => {
                if (searchInput !== "") {
                    setFilteredtopMovies(findMoviesByPartialTitle(topMovies, searchInput))
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
        { backgroundColor: theme.topScreen.backgroundColor }]}>
            <View style={[styles.searchContainer,
            { backgroundColor: theme.topScreen.searchContainer }]}>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.headerImageContainer}>
                    <Image source={IMAGES.searchIcon} />
                </TouchableOpacity>
                <View style={styles.textInputContainer}>

                    <TextInput
                        onSubmitEditing={handleSubmit}
                        onChangeText={text => {
                            setSearchInput(text)
                        }}
                        value={searchInput}
                        placeholder={SEARCH_MOVIE}
                        style={[styles.textInput,
                        { color: theme.topScreen.inputColor }]} />
                </View>
                <TouchableOpacity
                    onPress={tonggleModalVisible}
                    style={styles.headerImageContainer}>
                    <Image source={IMAGES.settingIcon} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                overScrollMode={"never"}
                data={filteredtopMovies}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <ModalContainer
                isModalVisible={isDateModalVisible}
                toggleModal={tonggleModalVisible}>
                <FilterModal
                    selectedDirector={directorName}
                    selectedGenre={genre}
                    handleResetFilter={handleResetFilter}
                    directors={getUniqueDirectorsAlphabetically(topMovies)
                        .map(x => { return { label: x, value: x } as DropButtonItem })}
                    genres={getUniqueGenresAlphabetically(topMovies)
                        .map(x => { return { label: x, value: x } as DropButtonItem })}
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