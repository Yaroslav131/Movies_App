import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';

export function handleEmailSingUp(email: string, password: string, name: string, sername: string) {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            await firebase
                .app()
                .database('https://moviesapp-d573f-default-rtdb.europe-west1.firebasedatabase.app/')
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

export const signInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: "149137953667-70q5mtem75rqpo31e3n54kvueudoo56u.apps.googleusercontent.com",
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
                .database('https://moviesapp-d573f-default-rtdb.europe-west1.firebasedatabase.app/')
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
            throw 'User cancelled the login process';
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
                .database('https://moviesapp-d573f-default-rtdb.europe-west1.firebasedatabase.app/')
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