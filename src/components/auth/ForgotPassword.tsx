import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router'
import useAuth from '@/components/auth/useAuth'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/config'
import { toast } from 'react-toastify'
import { FirebaseError } from 'firebase/app'

const ForgotPassword = () => {
	const { restPasswordSchemaValidation } = useAuth()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{
		email: string
	}>({
		resolver: yupResolver(restPasswordSchemaValidation),
	})

	const handleResetPassword = async (data: { email: string }) => {
		console.log(JSON.stringify(data, null, 2))
		// Add logic to send password reset email

		console.log(JSON.stringify(data, null, 2))
		try {
			await sendPasswordResetEmail(auth, data.email)
			toast.success(
				`Password reset link sent! to ${data.email} please check your email `,
			)
			setTimeout(() => {
				navigate('/sign-in')
			}, 0)
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			// const errorCode = firebaseError?.code
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Bad user credentials')
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

				{/* Forgot Password Form */}
				<div className="w-full border border-gray-300 rounded-md p-5 bg-white">
					<h1 className="text-2xl font-normal text-center mb-5 text-black">
						Forgot Password
					</h1>
					<form onSubmit={handleSubmit(handleResetPassword)}>
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
								placeholder="Enter your email"
								{...register('email')}
							/>
						</div>

						{/* Reset Password Button */}
						<button
							className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md transition-colors"
							type="submit">
							Reset Password
						</button>

						{/* Additional Links */}
						<div className="mt-6 flex justify-between  text-center space-y-4">
							<p className="text-sm text-gray-600">
								Don't have an account?{' '}
								<Link
									to="/sign-up"
									className="text-blue-600 hover:text-blue-700 font-semibold transition-all">
									Register
								</Link>
							</p>
							<p className="text-sm text-gray-600">
								<Link
									to="/sign-in"
									className="text-blue-600 hover:text-blue-700 font-semibold transition-all">
									Sign in instead?
								</Link>
							</p>
						</div>
					</form>
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

export default ForgotPassword
