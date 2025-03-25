import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { FirebaseError } from 'firebase/app'
import { Link, useNavigate } from 'react-router'

import useAuth from './useAuth'
import { AuthLoginRequestType } from '@/types'
import { Button } from '../ui/button'
import OAuth from '../OAuth'
import { auth, signInWithEmailAndPassword } from '@/config'

const SignIn = () => {
	const { loginSchemaValidation } = useAuth()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthLoginRequestType>({
		resolver: yupResolver(loginSchemaValidation),
	})

	//  Function to Create User with given name and password
	const signInWithEmailAndPasswordHandler: SubmitHandler<
		AuthLoginRequestType
	> = async (data) => {
		console.log(JSON.stringify(data, null, 2))

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			)
			if (userCredential.user) {
				navigate('/')
			}
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Bad user credentials')
		}
	}

	return (
		<div className="min-h-screen w-full bg-white flex justify-center items-center p-12 font-sans text-gray-900">
			<div className="w-[350px] min-w-[350px] flex flex-col items-center">
				{/* Logo */}
				<Link to="/">
					<img
						className="w-28 mx-auto mb-8"
						src="/images/Amazon-login-logo.jpg"
						alt="Amazon Logo"
					/>
				</Link>

				{/* Login Form */}
				<div className="w-full border border-gray-300 rounded-md p-5 bg-white">
					<h1 className="text-2xl font-normal text-center mb-5">Sign-In</h1>
					<form onSubmit={handleSubmit(signInWithEmailAndPasswordHandler)}>
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

						{/* Forgot Password Link */}
						<div className="mb-6 text-right">
							<Link
								to="/forgot-password" // Add your forgot password route here
								className="text-blue-600 hover:text-orange-500 text-sm">
								Forgot Password?
							</Link>
						</div>

						{/* Sign In Button */}
						<Button
							className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md transition-colors"
							type="submit">
							Sign In
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
					</form>
					{/* Google Sign-In */}
					<OAuth />
					{/* New User Section */}
					<h5 className="text-center text-gray-500 text-sm mt-6 mb-4">
						New to Amazon?
					</h5>

					<Link to="/sign-up">
						<Button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-md transition-colors cursor-pointer">
							Create your Amazon account
						</Button>
					</Link>
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

export default SignIn
