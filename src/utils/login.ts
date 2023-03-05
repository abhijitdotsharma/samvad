import {
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    Auth
} from "firebase/auth";


async function handleLogin({auth, email, password}: {auth: Auth, email: string, password: string}) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // dosomething with the created user
            const user = userCredential.user;
            console.log(`created user: ${user}`)
        })
        .catch((error) => {
            console.error(`err from server: ${error}`)
        })
}

async function handleGoogleLogin({auth, googleProvider}:{auth:Auth, googleProvider: GoogleAuthProvider}){

    console.log("In HandleGoogleLogin")
    console.log(`auth - ${auth} googProvider - ${googleProvider}`)
    signInWithPopup(auth, googleProvider)
    .then(() => {
        console.log("signed In W/Google")
    })
    .catch((error) => {
        console.error(`error from firebase: ${error?.message}`)
    })

}

async function handleSignOut({auth}: {auth: Auth}) {
    signOut(auth)
        .then(() => {
            console.log(`signed out successfully`)
        })
        .catch((error) => {
            console.log(`error from server: ${error}`)
        })

}



export {handleLogin, handleGoogleLogin, handleSignOut}