import {
  View, FlatList, Image, TouchableWithoutFeedback, Dimensions, Text,
} from 'react-native';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { getLenghtOffset, getMiddleIndex, getMiddleOffset } from '@/helpingFunctions';
import { Movie } from '@/types';
import { useAppSelector } from '@/hooks';
import { StackNavigation } from '@/route/HomeStack/types';
import styles from './styles';

const { width } = Dimensions.get('screen');

interface ItemProps {
  filmId?: string,
  image?: string,
  title?: string,
  topics?: string[],
  id: string
}

interface HorizontalSwiperProps {
  movies: Movie[]
}

function HorizontalSwiper(props: HorizontalSwiperProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const navigation = useNavigation<StackNavigation>();

  const movies: ItemProps[] = useMemo(() => handleSetMovies(), [props.movies]);
  const middleIndex = useMemo(() => getMiddleIndex(movies.length), [movies.length]);
  const middleOffset = useMemo(() => getMiddleOffset(middleIndex, width), [middleIndex, width]);

  const scrollOffsetLength = getLenghtOffset(movies.length, width);
  const itemWidth = width / 2;
  const sideItemWidth = width / 4;

  const [scrollOffset, setScrollOffset] = useState(middleOffset);
  const [focusedItemIndex, setfocusedItemIndex] = useState(middleIndex);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    scrollToMiddle();
  }, []);

  function handleSetMovies() {
    const fetchedMovies = props.movies.map((movie, index) => ({
      id: index.toString(),
      filmId: movie.imdbid,
      image: movie.imageurl[0],
      title: movie.title,
      topics: movie.genre,
    }));

    return [{ id: 'sideItemWidth' }, ...fetchedMovies, { id: 'sideItemWidth' }];
  }

  const scrollToMiddle = () => {
    flatListRef.current?.scrollToOffset({ offset: middleOffset, animated: false });
  };

  const onSwipeLeft = () => {
    if (scrollOffset + itemWidth < scrollOffsetLength) {
      setfocusedItemIndex(focusedItemIndex + 1);

      const newScrollOffset = scrollOffset + itemWidth;
      setScrollOffset(newScrollOffset);

      flatListRef.current?.scrollToOffset({ offset: newScrollOffset, animated: true });
    }
  };

  const onSwipeRight = () => {
    if (scrollOffset - itemWidth >= 0) {
      setfocusedItemIndex(focusedItemIndex - 1);

      const newScrollOffset = scrollOffset - itemWidth;
      setScrollOffset(newScrollOffset);

      flatListRef.current?.scrollToOffset({ offset: newScrollOffset, animated: true });
    }
  };

  function handleNavigateToFilm(id: string) {
    navigation.navigate('Details', { moive: props.movies.find((movie) => movie.imdbid == id)! });
  }

  const renderItem = ({ item }: { item: ItemProps }) => (
    <TouchableWithoutFeedback onPress={() => {
      if (item.id != 'sideItemWidth') {
        handleNavigateToFilm(item.filmId!);
      }
    }}
    >
      <View
        key={item.id}
        style={[styles.itemContainer,
        { width: item.id === 'sideItemWidth' ? sideItemWidth : itemWidth },
        item.id === focusedItemIndex.toString() ? styles.focusedContainer : styles.smallContainer,
        ]}
      >
        {item.id !== 'sideItemWidth' ? (
          <Image style={styles.imageStyle} source={{ uri: item.image }} />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.flatListContainer}>
      <GestureRecognizer
        onSwipeLeft={() => onSwipeLeft()}
        onSwipeRight={() => onSwipeRight()}
        style={styles.flatList}
      >
        <FlatList
          ref={flatListRef}
          style={styles.flatList}
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"

          scrollEnabled={false}
          getItemLayout={(data, index) => ({
            length: itemWidth,
            offset: scrollOffsetLength,
            index,
          })}
        />
      </GestureRecognizer>
      <View style={styles.topicsContainer}>
        {movies[focusedItemIndex + 1].topics?.map((topic, index) => (
          <View
            key={index}
            style={[styles.topics,
            { backgroundColor: theme.horizontalSwiper.backgroundColor }]}
          >
            <Text style={[styles.topicsText, { color: theme.horizontalSwiper.color }]}>{topic}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default HorizontalSwiper;
