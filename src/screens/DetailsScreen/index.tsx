import { View, TouchableOpacity, StatusBar, Image, Text, useColorScheme, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles";
import VideoPlayer from "@/components/VideoPlayer";
import { IMAGES } from "@assets/images";
import { COMMENT_IS_REQUIRED, COMMENT_PLACE_HOLDER, COMMENT_TOO_LONG, GET_TICKET, LESS_TEXT, MAX_SYNOPSIS_LENGTH, MORE_TEXT, NAME_PLACE_HOLDER } from "@/constants";
import { ligthTheme } from "@/theme";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootRouteProps, StackNavigation } from "@/route/HomeStack";
import { useEffect, useState } from "react";
import { getCurrentUser, getFilmData, handleAddComent, listenForFilmDataChanges } from "@/api/firebase";
import { convertCommentsObjectToArray } from "@/helpingFunctions";
import { FilmCommentsType, UserType } from "@/types";
import Comment from "@/components/Comment";
import { Field } from "formik";
import AppForm from "@/components/AppForm";
import * as Yup from 'yup';
import CommentFormField from "@/components/CommentFormField";

export const validationCommentSchema = Yup.object().shape({
    comment: Yup.string()
        .max(50, COMMENT_TOO_LONG)
        .required(COMMENT_IS_REQUIRED)
        .label('Comment'),
});

function DetailScreen() {
    const [expanded, setExpanded] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserType>();
    const [filmComments, setFilmComments] = useState<FilmCommentsType[]>([]);
    const route = useRoute<RootRouteProps<'Details'>>();
    const movie = route.params.moive
    const navigation = useNavigation<StackNavigation>();

    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    StatusBar.setHidden(true);

    function updateFilmComments(filmComments: FilmCommentsType[]) {
        setFilmComments(filmComments);
        // playSound()
    }

    useEffect(() => {
        async function fetchFilmDataAndComments(imdbId: string) {
            try {
                const filmData = await getFilmData(imdbId);
                if (filmData) {
                    const filmCommentsArray = convertCommentsObjectToArray(filmData);
                    setFilmComments(filmCommentsArray);
                }
            } catch (error) {
                setFilmComments([]);
                console.error('Произошла ошибка:', error);
            }
        }

        fetchFilmDataAndComments(movie.imdbid)

        const stopListening = listenForFilmDataChanges(movie.imdbid, updateFilmComments);

        getCurrentUser().then(user => {
            setCurrentUser(user as UserType)
        })

        return () => {
            stopListening();
        };
    }, [movie.imdbid]);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    const truncateText = (text: string) => {
        if (text.length > MAX_SYNOPSIS_LENGTH && !expanded) {
            return text.slice(0, MAX_SYNOPSIS_LENGTH) + '...';
        }
        return text;
    };

    const renderItem = ({ item }: { item: FilmCommentsType }) => (
        <Comment item={item} theme={theme} />
    );

    const buyTicketButton = <TouchableOpacity style={[styles.buyTickerButton,
    { backgroundColor: theme.detailScreen.buttonBackgroundColor }]}>
        <Image style={styles.buttonImage}
            source={IMAGES.ticketLarge} />
        <Text style={[styles.buyTickerButtonText,
        { color: theme.detailScreen.color }]}>
            {GET_TICKET}
        </Text>
    </TouchableOpacity>

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                <Image source={IMAGES.backButton} />
            </TouchableOpacity>
            <View style={styles.playerContainer}>
                <VideoPlayer
                    centerButton={buyTicketButton}
                    isPlayerRound={false}>

                    <LinearGradient
                        colors={[theme.detailScreen.transparentColor, theme.detailScreen.backgroundColor]}
                        style={styles.gradient}
                    />
                </VideoPlayer>


            </View>
            <View style={[styles.descriptionContainer,
            { backgroundColor: theme.detailScreen.backgroundColor }]}>
                <View style={styles.descriptionContant}>
                    <Text style={
                        [styles.title,
                        { color: theme.detailScreen.color }]} >
                        {movie.title}
                    </Text>

                    <Text style={[styles.synopsis,
                    { color: theme.detailScreen.color }]}>
                        {truncateText(movie.synopsis)}
                        {movie.synopsis.length > MAX_SYNOPSIS_LENGTH && (
                            <Text onPress={toggleDescription} style={[styles.synopsis,
                            { color: theme.detailScreen.buttonBackgroundColor }]}>
                                {expanded ? LESS_TEXT : MORE_TEXT}
                            </Text>
                        )}
                    </Text>

                    <View style={styles.commentsContainer}>
                        <Text style={[styles.commentsCounter,
                        { color: theme.detailScreen.color }]}>
                            {filmComments.length} COMMENTS
                        </Text>

                        <AppForm
                            initialValues={{ comment: '' }}
                            validationSchema={validationCommentSchema}
                            onSubmit={(values: { comment: string }) => {
                                handleAddComent(movie.imdbid, values.comment)
                                values.comment = ""
                            }}>
                            <KeyboardAvoidingView
                                behavior="padding"
                                keyboardVerticalOffset={50}>
                                <Field
                                    userName={currentUser?.firstName}
                                    userLastName={currentUser?.lastName}
                                    component={CommentFormField}
                                    name="comment"
                                    placeholder={COMMENT_PLACE_HOLDER} />
                            </KeyboardAvoidingView>
                        </AppForm>

                        <FlatList
                            style={styles.flatList}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            overScrollMode={"never"}
                            data={filmComments}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>
                </View>
            </View >
        </View >
    );
}

export default DetailScreen;