import {
  View, TouchableOpacity, StatusBar, Image, Text, FlatList, KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Field } from 'formik';
import { IMAGES } from '@assets/images';
import VideoPlayer from '@/components/VideoPlayer';
import { getCurrentUser } from '@/api/firebase/authFirebase';
import { getFilmComments, handleAddComent, listenForFilmDataChanges } from '@/api/firebase/filmFirebase';
import { convertCommentsObjectToArray } from '@/helpingFunctions';
import { FilmCommentsType, UserType } from '@/types';
import Comment from '@/components/Comment';
import AppForm from '@/components/AppForm';
import CommentFormField from '@/components/CommentFormField';
import { useAppSelector } from '@/hooks';
import { MAX_SYNOPSIS_LENGTH, languageDictionary } from '@/constants';
import { validationCommentSchema } from './constans';
import { RootRouteProps, StackNavigation } from '@/route/HomeStack/types';
import { styles } from './styles';

function DetailScreen() {
  const [expanded, setExpanded] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType>();
  const [filmComments, setFilmComments] = useState<FilmCommentsType[]>([]);
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;
  const translations = languageDictionary[currentLanguage];

  const route = useRoute<RootRouteProps<'Details'>>();
  const movie = route.params.moive;
  const navigation = useNavigation<StackNavigation>();

  StatusBar.setHidden(true);

  useEffect(() => {
    async function fetchFilmDataAndComments(imdbId: string) {
      try {
        const filmData = await getFilmComments(imdbId);
        if (filmData) {
          const filmCommentsArray = convertCommentsObjectToArray(filmData);
          setFilmComments(filmCommentsArray);
        }
      } catch (error) {
        setFilmComments([]);
      }
    }

    fetchFilmDataAndComments(movie.imdbid);

    const stopListening = listenForFilmDataChanges(movie.imdbid, updateFilmComments);

    getCurrentUser().then((user) => {
      setCurrentUser(user as UserType);
    });

    return () => {
      stopListening();
    };
  }, [movie.imdbid]);


  function updateFilmComments(filmComments: FilmCommentsType[]) {
    setFilmComments(filmComments);
  }

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const truncateText = (text: string) => {
    if (text.length > MAX_SYNOPSIS_LENGTH && !expanded) {
      return `${text.slice(0, MAX_SYNOPSIS_LENGTH)}...`;
    }
    return text;
  };

  const renderItem = ({ item }: { item: FilmCommentsType }) => (
    <Comment item={item} theme={theme} />
  );

  const buyTicketButton = (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Booking', { moive: movie }); }}
      style={[styles.buyTickerButton,
      { backgroundColor: theme.detailScreen.buttonBackgroundColor }]}
    >
      <Image
        style={styles.buttonImage}
        source={IMAGES.ticketLarge}
      />
      <Text style={[styles.buyTickerButtonText,
      { color: theme.detailScreen.color }]}
      >
        {translations.GET_TICKET}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.goBack(); }} style={styles.backButton}>
        <Image source={IMAGES.backButton} />
      </TouchableOpacity>
      <View style={styles.playerContainer}>
        <VideoPlayer
          centerButton={buyTicketButton}
          isPlayerRound={false}
        >

          <LinearGradient
            colors={[theme.detailScreen.transparentColor, theme.detailScreen.backgroundColor]}
            style={styles.gradient}
          />
        </VideoPlayer>
      </View>
      <View style={[styles.descriptionContainer,
      { backgroundColor: theme.detailScreen.backgroundColor }]}
      >
        <View style={styles.descriptionContant}>
          <Text style={
            [styles.title,
            { color: theme.detailScreen.color }]
          }
          >
            {movie.title}
          </Text>

          <Text style={[styles.synopsis,
          { color: theme.detailScreen.color }]}
          >
            {truncateText(movie.synopsis)}
            {movie.synopsis.length > MAX_SYNOPSIS_LENGTH && (
              <Text
                onPress={toggleDescription}
                style={[styles.synopsis,
                { color: theme.detailScreen.buttonBackgroundColor }]}
              >
                {expanded ? translations.LESS_TEXT : translations.MORE_TEXT}
              </Text>
            )}
          </Text>

          <View style={styles.commentsContainer}>
            <Text style={[styles.commentsCounter,
            { color: theme.detailScreen.color }]}
            >
              {filmComments.length}
              {' '}
              COMMENTS
            </Text>

            <AppForm
              initialValues={{ comment: '' }}
              validationSchema={validationCommentSchema}
              onSubmit={(values: { comment: string }) => {
                handleAddComent(movie.imdbid, values.comment);
                values.comment = '';
              }}
            >
              <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={50}
              >
                <Field
                  userName={currentUser?.firstName}
                  userLastName={currentUser?.lastName}
                  component={CommentFormField}
                  name="comment"
                  placeholder={translations.COMMENT_PLACE_HOLDER}
                />
              </KeyboardAvoidingView>
            </AppForm>
          </View>

          <FlatList
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
            data={filmComments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}

export default DetailScreen;
