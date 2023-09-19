import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';
import Config from 'react-native-config';

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