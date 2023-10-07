import {
  FlatList, Image, Text, TouchableOpacity, View,
  ScrollView,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { RootRouteProps, StackNavigation } from '@/route/HomeStack/HomeStack';
import { FilmSession, Seat } from '@/types';
import SessionButton from '@/components/SessionButton';
import {
  isSeatInArray, divideSeatsBySeatNumber, formatDate, getFilmSessionsByDate, updateSeatsInFilmSessions, getId,
} from '@/helpingFunctions';
import SeatButtonType from '@/components/SeatButtonType';
import ModalContainer from '@/components/ModalContainer';
import MyCalendar from '@/components/Calendar';
import { getFilmSessions, handleBuyTicket, handleUpdateSession } from '@/api/firebase/filmFirebase';
import { onDisplayNotification } from '@/notifications';
import { languageDictionary, mockFilmSessions } from '@/constants';
import { useAppSelector } from '@/hooks';

function BookingFilms() {
  const theme = useAppSelector((state) => state.theme.value);
  const [pickedDate, setPickedDate] = useState<Date>(new Date());
  const [sessions, setSessions] = useState<FilmSession[]>([]);
  const [todaySessions, setTodaySessions] = useState<FilmSession[]>([]);
  const [chosenSession, setChosenSession] = useState<string>('');
  const [chosenSeats, setChosenSeats] = useState<Seat[]>([]);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);

  const route = useRoute<RootRouteProps<'Booking'>>();
  const movie = route.params.moive;
  const navigation = useNavigation<StackNavigation>();

  const [seats, setSeats] = useState<[Seat[], Seat[]]>([[], []]);

  const chosenSeatsCount = chosenSeats ? chosenSeats.length : 0;
  const chosenSessionObject = sessions.find((x) => x.id === chosenSession);
  const totalPrice = chosenSessionObject ? chosenSeatsCount * chosenSessionObject.coast : 0;

  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  useEffect(() => {
    handleSetSessions();
  }, []);

  useEffect(() => {
    if (sessions.length != 0) {
      setTodaySessions(getFilmSessionsByDate(sessions, pickedDate));
    }

    if (todaySessions.length != 0) {
      setSeats(divideSeatsBySeatNumber(todaySessions.find((x) => x.id === chosenSession)!.seats));
      setChosenSeats([]);
    } else {
      setSeats([[], []]);
    }
  }, [chosenSession, pickedDate]);

  function handleSetSessions() {
    getFilmSessions(movie.imdbid).then((result) => {
      if (result === null) {
        handleUpdateSession(movie.imdbid, mockFilmSessions);
      } else {
        const sessions = getFilmSessionsByDate(result, pickedDate);
        if (sessions.length !== 0) {
          setSessions(result);
          handleChooseSession(sessions[0].id);
          setTodaySessions(sessions);
          setSeats(divideSeatsBySeatNumber(sessions[0].seats));
        }
      }
    });
  }

  function handleSetSelectedDate(date: string) {
    setPickedDate(new Date(date));
  }

  function handleChooseSession(sessionId: string) {
    setChosenSession(sessionId);
  }

  function tonggleModalVisible() {
    setIsDateModalVisible(!isDateModalVisible);
  }

  function handlePressSeat(seat: Seat) {
    if (chosenSeats && isSeatInArray(seat, chosenSeats)) {
      const sortedSeats = chosenSeats
        .filter((x) => !(x.row === seat.row && x.seatNumber === seat.seatNumber));

      setChosenSeats(sortedSeats);
    } else if (seat.isAvailable) {
      if (chosenSeats) {
        setChosenSeats([...chosenSeats, seat]);
      } else {
        setChosenSeats([seat]);
      }
    }
  }

  function handleSetSeatColor(seat: Seat): string {
    if (chosenSeats && isSeatInArray(seat, chosenSeats)) {
      return theme.seatButton.selected;
    }
    if (seat.isAvailable) {
      return theme.seatButton.available;
    }

    return theme.seatButton.reserved;
  }

  function onSubmitBuy() {
    if (chosenSeats.length != 0) {
      const ticketId = getId();
      const updatedSessions = updateSeatsInFilmSessions(ticketId, sessions, chosenSession, chosenSeats);

      const session = sessions.find((x) => x.id === chosenSession);
      handleUpdateSession(movie.imdbid, updatedSessions);
      handleBuyTicket(ticketId, movie.imdbid, chosenSession, chosenSeats.length);
      onDisplayNotification(new Date(session!.date), movie.title, session!.timeStart);
      setChosenSeats([]);
      handleSetSessions();
    }
  }

  const renderSessionItem = ({ item }: { item: FilmSession }) => (
    <SessionButton
      handleChooseSession={handleChooseSession}
      session={item}
      chosenSessions={chosenSession}
    />
  );

  const renderSeatItem = ({ item }: { item: Seat }) => (
    <TouchableOpacity
      onPress={() => { handlePressSeat(item); }}
      style={[
        { backgroundColor: handleSetSeatColor(item) },
        { borderWidth: item.isAvailable ? 2 : 1 },
        { borderColor: theme.seatButton.borderColor },
        styles.seatButon]}
    />
  );

  return (
    <>
      <View style={[styles.container,
        { backgroundColor: theme.bookingFilms.backgroundColor }]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => { navigation.goBack(); }}
            style={styles.backButton}
          >
            <Image source={IMAGES.backButton} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerText,
              { color: theme.bookingFilms.color }]}
            >
              {translations.BOKKING_HEADER_TEXT}
            </Text>
          </View>
        </View>
        <View style={[styles.scheduleContainer]}>
          <Text style={[styles.title,
            { color: theme.bookingFilms.color }]}
          >
            {translations.SCHEDULE}
          </Text>
          <View style={[styles.datepickerContainer]}>
            <Text style={[styles.dateTitle,
              { color: theme.bookingFilms.color }]}
            >
              {translations.DATE}
              :
              {formatDate(pickedDate)}
            </Text>
            <TouchableOpacity onPress={tonggleModalVisible}>
              <Image source={IMAGES.calendar} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={todaySessions}
          renderItem={renderSessionItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.seatContainer}>
          <Text style={[styles.title,
            { color: theme.bookingFilms.color }]}
          >
            {translations.SEATS}
          </Text>
          <Text style={[styles.screenText,
            { color: theme.bookingFilms.color }]}
          >
            {translations.SCREEN}
          </Text>
          <ScrollView
            contentContainerStyle={styles.seatWebContainer}
          >
            <FlatList
              contentContainerStyle={styles.leftFlatListContainer}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              numColumns={4}
              data={seats[0]}
              renderItem={renderSeatItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <FlatList
              contentContainerStyle={styles.rightFlatListContainer}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              numColumns={4}
              data={seats[1]}
              renderItem={renderSeatItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
          <View style={styles.seatButtonsConainer}>
            {translations.SEAT_BUTTONS.map((x, index) => <SeatButtonType text={x} type={x} key={index} />)}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.priceContainer}>
            <Text style={[styles.seatsCounter,
              { color: theme.bookingFilms.color }]}
            >
              {chosenSeats?.length}
              {' '}
              {translations.SEATS}
            </Text>
            <Text style={[styles.priceText,
              { color: theme.bookingFilms.color }]}
            >
              {totalPrice}
              {' '}
              $
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => { onSubmitBuy(); }}
            style={[styles.buyButton,
              { backgroundColor: theme.bookingFilms.buyButton }]}
          >
            <Text style={[styles.buyButtonText,
              { color: theme.bookingFilms.color }]}
            >
              {translations.BOOK_NOW}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      <ModalContainer
        isModalVisible={isDateModalVisible}
        toggleModal={tonggleModalVisible}
      >
        <MyCalendar onClose={tonggleModalVisible} selectedDate={pickedDate} onSelect={handleSetSelectedDate} />
      </ModalContainer>
    </>
  );
}

export default BookingFilms;
