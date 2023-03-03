import React, { useEffect, useState } from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

import { useAuth } from '../context/auth-context';

function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const googleProvider = new GoogleAuthProvider();
    async function handleGoogleLogin() {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                console.log("Signed In W/Google")
            })
            .catch((error) => {
                console.error(`error from firebase: ${error?.message}`)
            })

    }


    async function handleLogin() {
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

    async function handleSignOut() {
        signOut(auth)
            .then(() => {
                console.log(`signed out successfully`)
            })
            .catch((error) => {
                console.log(`error from server: ${error}`)
            })

    }

    return (
        <div>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={handleLogin}
            >Signup</button>

            <button
                onClick={handleGoogleLogin}
            >Google Login</button>


            <button
                onClick={handleSignOut}
            >Logout</button>
        </div>
    )
}

export default Auth