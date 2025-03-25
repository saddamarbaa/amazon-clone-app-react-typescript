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
console.log()

const firebaseConfig = {
	apiKey: 'AIzaSyCH63FlG36cjpXkQm5n4XqaYEZ9M3mWrAM',
	authDomain: 'amazoon-clone-app.firebaseapp.com',
	projectId: 'amazoon-clone-app',
	storageBucket: 'amazoon-clone-app.firebasestorage.app',
	messagingSenderId: '643848763574',
	appId: '1:643848763574:web:ea3565987e931385f6ce17',
}

// Initialize Firebase
const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	app,
	auth,
	createUserWithEmailAndPassword,
	db,
	getAuth,
	GoogleAuthProvider,
	googleProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
}
