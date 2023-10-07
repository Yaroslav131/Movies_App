import { firebase } from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';
import Config from 'react-native-config';
import {
  FilmCommentsType, FilmSession, Ticket,
} from '@/types';
import { convertCommentsObjectToArray } from '@/helpingFunctions';
import { USER_ID } from '@/constants';
import { getCurrentUserId } from './authFirebase';

export function listenForFilmDataChanges(filmId: string, setFilmComments: (comments: FilmCommentsType[]) => void) {
  const filmsRef = firebase.database().ref(`/films/comments/${filmId}`);
  filmsRef.on('value', (snapshot) => {
    const updatedFilmData = snapshot.val();
    if (updatedFilmData) {
      const updatedFilmCommentsArray = convertCommentsObjectToArray(updatedFilmData);
      setFilmComments(updatedFilmCommentsArray);
    }
  });

  return () => {
    filmsRef.off('value');
  };
}

export function handleAddComent(filmId: string, comment: string) {
  try {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;

        firebase
          .app()
          .database(Config.FIREBASE_DATABASE_URL)
          .ref(`/films/comments/${filmId}`)
          .push({
            data: new Date().toString(),
            comment,
            userId,
          });
      }
    });

    Snackbar.show({
      text: 'Comment added',
      duration: Snackbar.LENGTH_LONG,

    });
  } catch {
    (error: any) => Snackbar.show({
      text: error,
      duration: Snackbar.LENGTH_LONG,
    });
  }
}

export function handleUpdateSession(filmId: string, session: FilmSession[]) {
  try {
    firebase
      .app()
      .database(Config.FIREBASE_DATABASE_URL)
      .ref(`/films/sessions/${filmId}`)
      .set(session);

    Snackbar.show({
      text: 'session updated',
      duration: Snackbar.LENGTH_LONG,
    });
  } catch {
    (error: any) => Snackbar.show({
      text: error,
      duration: Snackbar.LENGTH_LONG,
    });
  }
}

export function handleBuyTicket(tickedId: string, filmId: string, sessionId: string, ticketCount: number) {
  const ticket: Ticket = {
    past: false,
    ticketId: tickedId,
    filmId,
    sessionId,
    ticketCount,
  };

  getCurrentUserId().then((x) => {
    try {
      firebase
        .app()
        .database(Config.FIREBASE_DATABASE_URL)
        .ref(`/users/${USER_ID}/tickets`)
        .push(ticket);

      Snackbar.show({
        text: 'ticket bought',
        duration: Snackbar.LENGTH_LONG,
      });
    } catch {
      (error: any) => Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  });
}

export async function handleDeleteTicket(ticketId: string) {
  let tickets = await getTickets();

  tickets = tickets.filter((ticket) => ticket.ticketId !== ticketId);

  getCurrentUserId().then((userId) => {
    try {
      firebase
        .app()
        .database(Config.FIREBASE_DATABASE_URL)
        .ref(`/users/${USER_ID}/tickets`)
        .set(tickets);

      Snackbar.show({
        text: 'ticket deleted',
        duration: Snackbar.LENGTH_LONG,
      });
    } catch {
      (error: any) => Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  });
}

export async function getFilmSessions(filmId: string) {
  const database = firebase.database();
  const filmsRef = database.ref(`/films/sessions/${filmId}`);

  try {
    const snapshot = await filmsRef.once('value');
    const filmData = snapshot.val();
    return filmData;
  } catch (error) {
    Snackbar.show({
      text: 'Error while retrieving data from the database',
      duration: Snackbar.LENGTH_LONG,

    });
  }
}

export async function getFilmSession(filmId: string, sessionId: string): Promise<FilmSession | null> {
  const database = firebase.database();
  const filmsRef = database.ref(`/films/sessions/${filmId}/${sessionId}`);

  try {
    const snapshot = await filmsRef.once('value');
    const filmData = snapshot.val();
    return filmData;
  } catch (error) {
    Snackbar.show({
      text: 'Error while retrieving data from the database',
      duration: Snackbar.LENGTH_LONG,

    });

    return null;
  }
}

export async function getTickets(): Promise<Ticket[]> {
  try {
    const database = firebase.database();
    const filmsRef = database.ref(`/users/${USER_ID}/tickets`);

    const snapshot = await filmsRef.once('value');
    const ticketData = snapshot.val();

    if (!ticketData) {
      return [];
    }

    const tickets: Ticket[] = Object.values(ticketData);
    return tickets;
  } catch (error: any) {
    Snackbar.show({
      text: error.message,
      duration: Snackbar.LENGTH_LONG,
    });

    return [];
  }
}

export async function getFilmComments(filmId: string) {
  const database = firebase.database();
  const filmsRef = database.ref(`/films/comments/${filmId}`);

  try {
    const snapshot = await filmsRef.once('value');
    const filmData = snapshot.val();
    return filmData;
  } catch (error) {
    Snackbar.show({
      text: 'Error while retrieving data from the database',
      duration: Snackbar.LENGTH_LONG,

    });
  }
}

export function startListeningToComments(filmId: string) {
  const database = firebase.database();
  const commentsRef = database.ref(`/films/comments/${filmId}`);

  commentsRef.on('value', (snapshot) => {
    const commentsData = snapshot.val();
    return (commentsData);
  });
}
