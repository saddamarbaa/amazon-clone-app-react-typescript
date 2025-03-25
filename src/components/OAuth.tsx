import {
	auth,
	// GoogleAuthProvider,
	googleProvider,
	signInWithPopup,
} from '@/config'
import { FirebaseError } from 'firebase/app'

import { useNavigate } from 'react-router'
import { Button } from './ui/button'
import { toast } from 'react-toastify'

export default function OAuth() {
	const navigate = useNavigate()

	const signInWithGoogleHandler = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider)
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result)
			// const token = credential?.accessToken
			const user = result?.user
			console.log(result, user)

			// Show success toast on successful sign-in
			toast.success('Login successful!')

			// Navigate to home
			navigate('/')
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			// const errorCode = firebaseError?.code
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Something went wrong with the registration')
		}
	}

	return (
		<Button
			className="flex items-center justify-center mt-6 p-4 rounded-lg border border-[#DB4437] bg-[#DB4437] hover:bg-[#C1351A] cursor-pointer transition duration-300 ease-in-out shadow-md hover:shadow-lg w-full"
			onClick={signInWithGoogleHandler}>
			<img
				className="w-6 h-6 mr-3"
				src="/images/google.png"
				alt="Google Logo"
			/>
			<span className="text-white  hover:text-white transition duration-300 ease-in-out font-bold ">
				Login with Google
			</span>
		</Button>
	)
}
