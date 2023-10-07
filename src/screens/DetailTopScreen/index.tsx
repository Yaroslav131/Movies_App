import {
  View, TouchableOpacity, Image, Text, StatusBar, LayoutAnimation, ScrollView, FlatList, LayoutChangeEvent,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Animated,
{
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import { useEffect, useRef, useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import VideoPlayer from '@/components/VideoPlayer';
import { styles } from './styles';
import { useAppSelector, useImageColors } from '@/hooks';
import { getMoviesInfo } from '@/api/rapid';
import { FilmDitails } from '@/types';
import { handleCutText } from '@/helpingFunctions';
import { MAX_REVIEWS_LENGTH, MAX_SYNOPSIS_LENGTH, languageDictionary } from '@/constants';
import { RootRouteProps, StackNavigation } from '@/route/TopFilmRoot/types';
import { IMAGES } from '@assets/images';




function DetailTopScreen() {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;
  const translations = languageDictionary[currentLanguage];

  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<RootRouteProps<'Details'>>();
  const movie = route.params.moive;

  const flatListRef = useRef<FlatList>(null);

  const [isSwiped, setIsSwiped] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [filmDitails, setFilmDitails] = useState<FilmDitails | null>(null);
  const [flatListWidth, setFlatListWidth] = useState(0);

  const scrollOffsetLength = filmDitails
    ? filmDitails?.reviews.length * flatListWidth : 0;

  const [scrollOffset, setScrollOffset] = useState(flatListWidth / 2);

  const images = useImageColors(movie.image, theme.detailTopScreen.backgroundColor);
  const colors = {
    dominantColor: images?.platform === 'android' ? images.dominant : theme.detailTopScreen.backgroundColor,
    darkMuted: images?.platform === 'android' ? images.darkMuted : theme.detailTopScreen.backgroundColor,
    darkVibrant: images?.platform === 'android' ? images.darkVibrant : theme.detailTopScreen.backgroundColor,
    averageColor: images?.platform === 'android' ? images.average : theme.detailTopScreen.backgroundColor,
    lightMutedColor: images?.platform === 'android' ? images.lightMuted : theme.detailTopScreen.backgroundColor,
    lightVibrantColor: images?.platform === 'android' ? images.lightVibrant : theme.detailTopScreen.backgroundColor,
  };

  const actorsString = filmDitails?.people.map((person) => {
    if (person.category === 'actor' || person.category === 'actress') {
      return person.characters?.join(', ');
    }
    return '';
  }).filter((person) => person != '').join(', ');

  useEffect(() => {
    getMoviesInfo(movie.imdbid).then((result) => {
      setFilmDitails(result);
    });
  }, []);

  const contentHeight = useSharedValue(30);

  const animatedStyle = useAnimatedStyle(() => ({
    height: `${contentHeight.value}%`,
  }));

  function handleSetSwiped() {
    setIsSwiped(!isSwiped);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const truncateText = (text: string) => {
    if (!expanded) {
      return handleCutText(text, MAX_SYNOPSIS_LENGTH);
    }
    return text;
  };

  const toggleDescription = () => {
    toggleExpand();
    setExpanded(!expanded);
  };

  const onSwipeUp = () => {
    runOnJS(handleSetSwiped)();
    contentHeight.value = withTiming(95);
  };

  const onSwipeDown = () => {
    runOnJS(handleSetSwiped)();
    contentHeight.value = withTiming(30);
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={[styles.reviewsContainer,
    { width: flatListWidth }]}
    >
      <Text style={[styles.reviewsText,
      { color: theme.detailTopScreen.color }]}
      >
        "
        {handleCutText(item, MAX_REVIEWS_LENGTH)}
        "
      </Text>
    </View>
  );

  const onFlatListLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setFlatListWidth(width);
  };

  const onPressRight = () => {
    if (scrollOffset + flatListWidth < scrollOffsetLength) {
      const newScrollOffset = scrollOffset + flatListWidth;
      setScrollOffset(newScrollOffset);

      flatListRef.current?.scrollToOffset({ offset: newScrollOffset, animated: true });
    }
  };

  const onPressLeft = () => {
    if (scrollOffset - flatListWidth >= 0) {
      const newScrollOffset = scrollOffset - flatListWidth;
      setScrollOffset(newScrollOffset);

      flatListRef.current?.scrollToOffset({ offset: newScrollOffset, animated: true });
    }
  };

  return (
    <>
      <StatusBar backgroundColor={colors.averageColor} />
      <View style={[styles.container]}>
        <View style={[styles.header, { backgroundColor: colors.averageColor }]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => { navigation.goBack(); }}
          >
            <Image source={IMAGES.backButton} />
          </TouchableOpacity>

          <Text style={[styles.headerText,
          { color: theme.detailTopScreen.color }]}
          >
            {translations.FILM_RATING}
          </Text>
        </View>

        <View style={styles.topContainer}>
          <LinearGradient
            colors={[
              colors.averageColor,
              colors.lightVibrantColor,
              colors.lightMutedColor,
            ]}
            style={styles.gradient}
          />
          <View style={styles.posterContainer}>
            <Image
              style={styles.poster}
              source={{ uri: movie.image }}
            />
          </View>
        </View>

        <Animated.View style={[styles.contentContainer,
        { backgroundColor: theme.detailTopScreen.backgroundColor },
          animatedStyle]}
        >
          <GestureRecognizer
            onSwipeUp={() => onSwipeUp()}
            onSwipeDown={() => onSwipeDown()}
          >
            <View style={[styles.horizontalLine,
            { backgroundColor: theme.detailTopScreen.lineColor }]}
            />
            <Text style={[styles.filmName,
            { color: theme.detailTopScreen.color }]}
            >
              {movie.title}
            </Text>

            <View style={styles.rankingContainer}>
              <Text style={[styles.rankingText,
              { color: theme.detailTopScreen.color }]}
              >
                {movie.rating}
              </Text>

              <View style={styles.starImageContainer}>
                <Image style={styles.starImage} source={IMAGES.starIcon} />
              </View>
            </View>

            {!isSwiped && <Image style={styles.scrollIcon} source={IMAGES.scrollIcon} />}
          </GestureRecognizer>
          {isSwiped
            && (
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                style={styles.content}
              >
                <View style={styles.playerContainer}>
                  <VideoPlayer isPlayerRound={true} >
                  </VideoPlayer>
                </View>

                <Text style={[styles.informText,
                { color: theme.detailTopScreen.color }]}
                >
                  {movie.year}
                  ,
                  {movie.genre.join(', ')}
                </Text>

                <Text style={[styles.title,
                { color: theme.detailTopScreen.titleColor }]}
                >
                  {translations.ABOUT}
                </Text>

                <View>
                  <Text style={[styles.synopsis,
                  { color: theme.detailTopScreen.color }]}
                  >
                    {truncateText(movie.description)}
                  </Text>
                  {!expanded && (
                    <LinearGradient
                      colors={[theme.detailScreen.transparentColor, theme.detailScreen.backgroundColor]}
                      style={styles.gradient}
                    />
                  )}
                </View>
                {movie.description.length > MAX_SYNOPSIS_LENGTH && (
                  <Text
                    onPress={toggleDescription}
                    style={[styles.readMoreText,
                    { color: theme.detailScreen.buttonBackgroundColor }]}
                  >
                    {translations.READ_MORE_TEXT}
                  </Text>
                )}

                <Text style={[styles.title,
                { color: theme.detailTopScreen.titleColor }]}
                >
                  {translations.ACTORS}
                </Text>

                <Text style={[styles.actorsText,
                { color: theme.detailTopScreen.color }]}
                >
                  {actorsString}
                </Text>

                <Text style={[styles.reviewsTitle,
                { color: theme.detailTopScreen.titleColor }]}
                >
                  {translations.REVIEWS}
                </Text>

                <View style={styles.flatlistContainer}>
                  <View style={styles.reviewsButtonContainer}>
                    <TouchableOpacity
                      onPress={onPressLeft}
                      style={styles.reviewsButton}
                    >
                      <Image source={IMAGES.reviewsLeftArrow} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.flatListContainer}>
                    <FlatList
                      ref={flatListRef}
                      style={styles.flatList}
                      data={filmDitails?.reviews}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      horizontal
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      overScrollMode="never"
                      onLayout={onFlatListLayout}
                      scrollEnabled={false}
                      getItemLayout={(data, index) => ({
                        length: flatListWidth,
                        offset: scrollOffsetLength,
                        index,
                      })}
                    />
                  </View>
                  <View style={styles.reviewsButtonContainer}>
                    <TouchableOpacity
                      onPress={onPressRight}
                      style={styles.reviewsButton}
                    >
                      <Image source={IMAGES.reviewsRigthArrow} />
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            )}
        </Animated.View>
      </View>
    </>
  );
}

export default DetailTopScreen;
