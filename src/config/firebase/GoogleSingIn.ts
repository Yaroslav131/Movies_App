import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth"

export const singInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: "149137953667-70q5mtem75rqpo31e3n54kvueudoo56u.apps.googleusercontent.com",
            scopes: ["profile", "email"]
        })

        await GoogleSignin.hasPlayServices();

        const userInfo = await GoogleSignin.signIn()

        const { idToken } = await GoogleSignin.signIn()
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken)

        auth().signInWithCredential(googleCredentials)

        return userInfo;
    } catch (error: any) {
        console.log("Gogogle Sing in", error)
    }
}
