import { singInWithGoogle } from '@/config/firebase/GoogleSingIn';
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


export async function googleSingIn() {
    singInWithGoogle().then(data => {
        if (!data) {
            console.log("No data")
            return
        }

        console.log("Seccess", data)
    })
}