import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowRight } from 'lucide-react'
import { toast } from 'react-toastify'
import { FirebaseError } from 'firebase/app'
import { Link, useNavigate } from 'react-router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { AuthRequestType } from '@/types'
import useAuth from './useAuth'
import OAuth from '../OAuth'
import { Button } from '../ui/button'
import { auth } from '@/config'

const SignUp = () => {
	const { signupSchemaValidation } = useAuth()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm<AuthRequestType>({
		resolver: yupResolver(signupSchemaValidation),
	})

	// Function to create a user with the given name and password
	// const registerUserWithEmailAndPasswordHandler = (data: AuthRequestType) => {
	// 	console.log(JSON.stringify(data, null, 2))
	// }

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler: SubmitHandler<
		AuthRequestType
	> = async (data) => {
		console.log(JSON.stringify(data, null, 2))
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			)

			if (auth?.currentUser) {
				updateProfile(auth?.currentUser, {
					displayName: data?.name,
					// photoURL: data?.imageUrl || '/images/linkedin-b.png',
				})
			}
			// const user = userCredential?.user
			console.log('Signed in', userCredential)

			// Add the user to db
			toast.success('Sign up was successful')
			navigate('/sign-in')
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			// const errorCode = firebaseError?.code
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Something went wrong with the registration')
		}
	}

	return (
		<div className="min-h-screen w-full bg-white flex justify-center items-center p-12 font-sans">
			<div className="w-[400px] min-w-[400px] flex flex-col items-center">
				{/* Logo */}
				<Link to="/">
					<img
						className="w-28 mx-auto mb-8"
						src="/images/Amazon-login-logo.jpg"
						alt="Amazon Logo"
					/>
				</Link>

				{/* Sign-Up Form */}
				<div className="w-full border border-gray-300 rounded-md p-5 bg-white text-gray-900">
					<h1 className="text-2xl font-normal text-center mb-5">
						Create account
					</h1>
					<form
						onSubmit={handleSubmit(registerUserWithEmailAndPasswordHandler)}>
						{/* Name Input */}
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-1 ${
									errors.name ? 'text-red-500' : 'text-gray-700'
								}`}
								htmlFor="name">
								{errors.name ? errors.name.message : 'Your name'}
							</label>
							<input
								className={`w-full p-2 border ${
									errors.name ? 'border-red-500' : 'border-gray-300'
								} rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
								type="text"
								id="name"
								{...register('name')}
							/>
						</div>

						{/* Email Input */}
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-1 ${
									errors.email ? 'text-red-500' : 'text-gray-700'
								}`}
								htmlFor="email">
								{errors.email ? errors.email.message : 'Email'}
							</label>
							<input
								className={`w-full p-2 border ${
									errors.email ? 'border-red-500' : 'border-gray-300'
								} rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
								type="email"
								id="email"
								autoComplete="email"
								{...register('email')}
							/>
						</div>

						{/* Password Input */}
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-1 ${
									errors.password ? 'text-red-500' : 'text-gray-700'
								}`}
								htmlFor="password">
								{errors.password ? errors.password.message : 'Password'}
							</label>
							<input
								className={`w-full p-2 border ${
									errors.password ? 'border-red-500' : 'border-gray-300'
								} rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
								type="password"
								id="password"
								{...register('password')}
							/>
						</div>

						{/* Confirm Password Input */}
						<div className="mb-6">
							<label
								className={`block text-sm font-bold mb-1 ${
									errors.confirmPassword ? 'text-red-500' : 'text-gray-700'
								}`}
								htmlFor="confirmPassword">
								{errors.confirmPassword
									? errors.confirmPassword.message
									: 'Confirm Password'}
							</label>
							<input
								className={`w-full p-2 border ${
									errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
								} rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
								type="password"
								id="confirmPassword"
								{...register('confirmPassword')}
							/>
						</div>

						{/* Create Account Button */}
						<Button
							className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md transition-colors"
							type="submit">
							Create your Amazon account
						</Button>

						{/* Terms and Conditions */}
						<p className="text-xs text-gray-600 mt-4">
							By creating an account, you agree to Amazon Clone{' '}
							<span className="text-blue-600 hover:text-orange-500 cursor-pointer">
								Conditions of Use
							</span>{' '}
							and{' '}
							<span className="text-blue-600 hover:text-orange-500 cursor-pointer">
								Privacy Notice
							</span>
						</p>

						{/* Already have an account? Sign-In */}
						<p className="flex items-center text-sm text-gray-600 mt-4 cursor-pointer">
							Already have an account?{' '}
							<Link to="/sign-in" className="flex items-center">
								<span className="text-blue-600 hover:text-orange-500 ml-1">
									Sign-In
								</span>
								<ArrowRight className="w-4 h-4 text-blue-600 ml-1 hover:text-orange-500" />
							</Link>
						</p>
					</form>
					<OAuth />
				</div>

				{/* Footer Links */}
				<div className="w-full text-center mt-6 text-xs text-gray-600">
					<div className="space-x-4 mb-2">
						<span className="text-blue-600 hover:text-orange-500 cursor-pointer">
							Conditions of Use
						</span>
						<span className="text-blue-600 hover:text-orange-500 cursor-pointer">
							Privacy Notice
						</span>
						<span className="text-blue-600 hover:text-orange-500 cursor-pointer">
							Help
						</span>
					</div>
					<div>
						<span>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
