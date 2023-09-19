import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

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

            console.log('User account created & signed in!');
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
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

        console.log("Success", userInfo);

    } catch (error: any) {
        console.log("Google Sign in Error", error);
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
            // Save user data to Firebase Realtime Database
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
        console.log('Facebook Sign in Error', error);
        throw error;
    }
}