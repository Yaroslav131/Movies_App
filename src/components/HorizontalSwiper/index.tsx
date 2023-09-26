import { View, FlatList, Image, TouchableWithoutFeedback, Dimensions, Text, useColorScheme } from "react-native"
import styles from "./styles";
import { useEffect, useMemo, useRef, useState } from "react";
import GestureRecognizer from 'react-native-swipe-gestures';
import { getLenghtOffset, getMiddleIndex, getMiddleOffset } from "@/helpingFunctions";
import { Movie } from "@/types";
import { ligthTheme } from "@/theme";

const width = Dimensions.get("screen").width

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
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    const movies: ItemProps[] = useMemo(() => handleSetMovies(), [props.movies]);
    const middleIndex = useMemo(() => getMiddleIndex(movies.length), [movies.length]);
    const middleOffset = useMemo(() => getMiddleOffset(middleIndex, width), [middleIndex, width]);

    const scrollOffsetLength = getLenghtOffset(movies.length, width)
    const itemWidth = width / 2
    const sideItemWidth = width / 4

    const [scrollOffset, setScrollOffset] = useState(middleOffset);
    const [focusedItemIndex, setfocusedItemIndex] = useState(middleIndex);
    const flatListRef = useRef<FlatList>(null);

    function handleSetMovies() {
        const fetchedMovies = props.movies.map((x, index) => {
            return {
                id: index.toString(),
                filmId: x.imdbid,
                image: x.imageurl[0],
                title: x.title,
                topics: x.genre
            }
        })

        return [{ id: "sideItemWidth", }, ...fetchedMovies, { id: "sideItemWidth", }];
    }

    const scrollToMiddle = () => {
        flatListRef.current?.scrollToOffset({ offset: middleOffset, animated: false });
    };

    useEffect(() => {
        scrollToMiddle()
    }, [])

    const onSwipeLeft = () => {
        if (scrollOffset + itemWidth < scrollOffsetLength) {

            setfocusedItemIndex(focusedItemIndex + 1)

            const newScrollOffset = scrollOffset + itemWidth;
            setScrollOffset(newScrollOffset);

            flatListRef.current?.scrollToOffset({ offset: newScrollOffset, animated: true });
        }
    };

    const onSwipeRight = () => {
        if (scrollOffset - itemWidth >= 0) {
            setfocusedItemIndex(focusedItemIndex - 1)

            const newScrollOffset = scrollOffset - itemWidth;
            setScrollOffset(newScrollOffset);

            flatListRef.current?.scrollToOffset({ offset: newScrollOffset, animated: true });
        }
    };

    const renderItem = ({ item }: { item: ItemProps }) => (
        <TouchableWithoutFeedback>
            <View key={item.id} style={[styles.itemContainer,
            { width: item.id === "sideItemWidth" ? sideItemWidth : itemWidth },
            item.id === focusedItemIndex.toString() ? styles.focusedContainer : styles.smallContainer,
            ]}>
                {item.id !== "sideItemWidth" ? (
                    <Image style={styles.imageStyle} source={{ uri: item.image }} />
                ) : null}
            </View>
        </TouchableWithoutFeedback >
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
                    overScrollMode={"never"}

                    scrollEnabled={false}
                    getItemLayout={(data, index) => ({
                        length: itemWidth,
                        offset: scrollOffsetLength,
                        index,
                    })}
                />
            </GestureRecognizer>
            <View style={styles.topicsContainer}>
                {movies[focusedItemIndex + 1].topics?.map((x, index) => {
                    return (
                        <View key={index} style={[styles.topics,
                        { backgroundColor: theme.horizontalSwiper.backgroundColor }]}>
                            <Text style={[styles.topicsText, { color: theme.horizontalSwiper.color }]}>{x}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

export default HorizontalSwiper;