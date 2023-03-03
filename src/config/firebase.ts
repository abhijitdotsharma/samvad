import { initializeApp } from "firebase/app";

import {getFirestore, collection} from "firebase/firestore";

import {getAuth} from "firebase/auth";

// This config is from basic-react-todo
// change it after basic broilerplate works

const firebaseConfig = {
  apiKey: "AIzaSyA99oReFch_tHPP5vUb62Vs1imZgrvBRw0",
  authDomain: "basic-react-todo-a58f8.firebaseapp.com",
  projectId: "basic-react-todo-a58f8",
  storageBucket: "basic-react-todo-a58f8.appspot.com",
  messagingSenderId: "940874351852",
  appId: "1:940874351852:web:e4830ab9cf13bdd06991c9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)