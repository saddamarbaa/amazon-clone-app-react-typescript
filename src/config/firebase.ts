// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import {
	updateProfile,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
const googleProvider = new GoogleAuthProvider()

const firebaseConfig = {
	 apiKey: "AIzaSyDYMtLgrfLKwYXGbBiSKloyzN5c8QiDZBo",

  authDomain: "ecommerce-a6301.firebaseapp.com",

  projectId: "ecommerce-a6301",

  storageBucket: "ecommerce-a6301.appspot.com",

  messagingSenderId: "86853033296",

  appId: "1:86853033296:web:b857d9f1f2354a71cda055"

}

// Initialize Firebase
const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	auth,
	db,
	GoogleAuthProvider,
	googleProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
}
