import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//     webClientId: '149137953667-70q5mtem75rqpo31e3n54kvueudoo56u.apps.googleusercontent.com"',
// });

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


// export async function onGoogleButtonPress() {

//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

//     const { idToken } = await GoogleSignin.signIn();


//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);


//     return auth().signInWithCredential(googleCredential);
// }