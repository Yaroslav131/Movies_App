import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';
import Config from 'react-native-config';
import { FilmCommentsType, UserType } from '@/types';
import { convertCommentsObjectToArray } from '@/helpingFunctions';

export function listenForFilmDataChanges(filmId: string, setFilmComments: (comments: FilmCommentsType[]) => void) {
    const filmsRef = firebase.database().ref(`/films/${filmId}`);
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
                    .ref(`/films/${filmId}`)
                    .push({
                        data: new Date().toString(),
                        comment: comment,
                        userId: userId,
                    });
            }
        });

        Snackbar.show({
            text: `Comment added`,
            duration: Snackbar.LENGTH_LONG,

        });
    }
    catch {
        (error: any) =>
            Snackbar.show({
                text: error,
                duration: Snackbar.LENGTH_LONG,
            });
    };
}

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            unsubscribe();
            if (user) {
                resolve(getUserById(user.uid));
            } else {
                reject(new Error("User error"));
            }
        });
    });
}

export async function getFilmData(filmId: string) {
    const database = firebase.database();
    const filmsRef = database.ref(`/films/${filmId}`);

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



export async function getUserById(userId: string): Promise<UserType | null> {
    const database = firebase.database();
    const filmsRef = database.ref(`/users/${userId}`);

    try {
        const snapshot = await filmsRef.once('value');
        const user = snapshot.val();
        return user;
    } catch (error) {
        Snackbar.show({
            text: 'Error while retrieving data from the database',
            duration: Snackbar.LENGTH_LONG,

        });

        return null;
    }
}



export function startListeningToComments(filmId: string) {
    const database = firebase.database();
    const commentsRef = database.ref(`/films/${filmId}`);

    commentsRef.on('value', (snapshot) => {
        const commentsData = snapshot.val();
        return (commentsData);
    });
}

export function handleEmailSingUp(email: string, password: string, name: string, sername: string) {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            await firebase
                .app()
                .database(Config.FIREBASE_DATABASE_URL)
                .ref(`/users/${user.uid}`)
                .set({
                    firstName: name,
                    lastName: sername,
                });

            Snackbar.show({
                text: `User account created & signed in!`,
                duration: Snackbar.LENGTH_LONG,

            });
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Snackbar.show({
                    text: 'That email address is already in use!',
                    duration: Snackbar.LENGTH_LONG,
                });
            }

            if (error.code === 'auth/invalid-email') {
                Snackbar.show({
                    text: 'That email address is invalid!',
                    duration: Snackbar.LENGTH_LONG,
                });
            }

            Snackbar.show({
                text: error,
                duration: Snackbar.LENGTH_LONG,
            });
        });
}

export function handleEmailSignIn(email: string, password: string) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            Snackbar.show({
                text: 'User signed in successfully!',
                duration: Snackbar.LENGTH_LONG,
            });
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                Snackbar.show({
                    text: 'User not found. Please check your email and password.',
                    duration: Snackbar.LENGTH_LONG,
                });
            }

            if (error.code === 'auth/wrong-password') {
                Snackbar.show({
                    text: 'Incorrect password. Please try again.',
                    duration: Snackbar.LENGTH_LONG,
                });
            }

            if (error.code === 'auth/invalid-email') {
                Snackbar.show({
                    text: 'Invalid email address. Please enter a valid email.',
                    duration: Snackbar.LENGTH_LONG,
                });
            }

            Snackbar.show({
                text: error.message,
                duration: Snackbar.LENGTH_LONG,
            });
        });
}

export const signInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: Config.WEB_CLIENT_ID,
            scopes: ["profile", "email"]
        })

        await GoogleSignin.hasPlayServices();

        const userInfo = await GoogleSignin.signIn();
        const { idToken } = userInfo;
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

        const userCredential = await auth().signInWithCredential(googleCredentials);
        const user = userCredential.user;


        if (userCredential.additionalUserInfo?.isNewUser) {

            await firebase
                .app()
                .database(Config.FIREBASE_DATABASE_URL)
                .ref(`/users/${user.uid}`)
                .set({
                    firstName: userInfo.user.givenName,
                    lastName: userInfo.user.familyName,
                });
        }
    } catch (error: any) {
        Snackbar.show({
            text: `Google Sign in Error ${error}`,
            duration: Snackbar.LENGTH_LONG,
        });
    }
}

export async function onFacebookButtonPress() {
    try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'Something went wrong obtaining access token';
        }

        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        const userCredential = await auth().signInWithCredential(facebookCredential);
        const user = userCredential.user;

        if (userCredential.additionalUserInfo?.isNewUser) {
            await firebase
                .app()
                .database(Config.FIREBASE_DATABASE_URL)
                .ref(`/users/${user.uid}`)
                .set({
                    firstName: user.displayName,
                    lastName: "",
                });
        }

        return userCredential;
    } catch (error) {
        Snackbar.show({
            text: `Google Sign in Error ${error}`,
            duration: Snackbar.LENGTH_LONG,
        });
    }
}