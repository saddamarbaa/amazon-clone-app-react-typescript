import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import React, { memo, useEffect, useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import LogInComponent from '../screens/LoginScreen'
import { signupSchemaValidation } from '../utils'
import { AuthRequestType } from '../types'

import {
	auth,
	createUserWithEmailAndPassword,
	googleProvider,
	signInWithPopup,
	GoogleAuthProvider,
} from '../config/firebase'

const SignUpScreen = () => {
	const [logIn, setLogIn] = useState<boolean>(false)
	const history = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<AuthRequestType>({
		resolver: yupResolver(signupSchemaValidation),
	})

	useEffect(() => {
		if (logIn) {
		history('login')
		}
	}, [logIn])

	if (logIn) {
		return <LogInComponent />
	}

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (data: AuthRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential?.user
				// console.log('Signed in', userCredential)
				setLogIn(() => true)
				history('/login')
			})
			.catch((error: any) => {
				const errorCode = error?.code
				const errorMessage = error?.message
				alert(errorMessage)
			})
	}

	const signInWithGoogleHandler = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result?.user
				history('/')
				// console.log(result, user)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error?.code
				const errorMessage = error?.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider?.credentialFromError(error)
				alert(errorMessage)
			})
	}

	return (
		<LogInWrapper>
			<Container>
				<Link to="/">
					<img
						className="login__logo"
						src="/images/Amazon-login-logo.jpg"
						alt="logo"
					/>
				</Link>
				<FormWrapper>
					<Title>Create account </Title>
					<form
						autoComplete="off"
						onSubmit={handleSubmit(registerUserWithEmailAndPasswordHandler)}>
						<div className="control">
							<label className={errors.name ? 'error' : ''} htmlFor="name">
								{errors.name ? errors.name?.message : '	Your name'}
							</label>
							<input
								className={` ${
									errors.name ? 'is-invalid' : 'input custom-input'
								}`}
								type="text"
								id="name"
								{...register('name')}
							/>
						</div>
						<div className="control">
							<label className={errors.email ? 'error' : ''} htmlFor="email">
								{errors.email ? errors.email?.message : 'Email'}
							</label>
							<input
								className={` ${
									errors.email ? 'is-invalid' : 'input custom-input'
								}`}
								type="email"
								id="email"
								autoComplete="email"
								{...register('email')}
							/>
						</div>

						<div className="control">
							<label
								className={errors.password ? 'error' : ''}
								htmlFor="password">
								{errors.password ? errors.password?.message : '	Password'}
							</label>
							<input
								className={` ${
									errors.password ? 'is-invalid' : 'input custom-input'
								}`}
								type="password"
								id="password"
								{...register('password')}
							/>
						</div>
						<div className="control">
							<label
								className={errors.confirmPassword ? 'error' : ''}
								htmlFor="confirmPassword">
								{errors.confirmPassword
									? errors.confirmPassword?.message
									: '	Confirm Password'}
							</label>
							<input
								className={` ${
									errors.confirmPassword ? 'is-invalid' : 'input custom-input'
								}`}
								type="password"
								id="confirmPassword"
								{...register('confirmPassword')}
							/>
						</div>

						<button className="btn" type="submit" name="submit">
							Create your Amazon account
						</button>
						<p>
							By creating an account, you agree to Amazon Clone
							<span> Conditions of Use </span>
							and <span> Privacy Notice</span>
						</p>

						<p className="sigin_in">
							Already have an account?&nbsp;
							<span onClick={() => setLogIn(true)}>Sign-In</span>
							<ArrowRightIcon className="arrow" />
						</p>

						<SignWthGoogleContainer>
							<img
								onClick={signInWithGoogleHandler}
								src="/images/google.png"
								alt="'Logo"
							/>
							<a onClick={signInWithGoogleHandler}>Login With Google</a>
						</SignWthGoogleContainer>
					</form>
				</FormWrapper>

				<div className="copyRight link">
					<span> Conditions of Use</span> <span> Privacy Notice </span>{' '}
					<span> Help </span>
				</div>
				<div className="copyRight">
					<span>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</span>
				</div>
			</Container>
		</LogInWrapper>
	)
}

export default memo(SignUpScreen)

const LogInWrapper = styled.div`
	color: #111;
	width: 100vw;
	min-height: 100vh;
	font-size: 1rem;
	background: #fff;
	display: flex;
	justify-content: center;
	padding: 3rem;
	font-family: 'Amazon Ember', Arial, sans-serif;
`

const Container = styled.div`
	width: 400px;
	min-width: 400px;
	height: 530px;
	display: flex;
	align-items: center;
	flex-direction: column;
	background: #fff;

	@media (max-width: 360px) {
		width: 97%;
		min-width: 97%;
	}

	label {
		font-size: 13px;
		font-weight: bold;
	}
	img.login__logo {
		width: 110px;
		margin-right: auto;
		margin-left: auto;
		object-fit: content;
	}

	div.copyRight {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
	}

	div.copyRight.link span {
		color: #0066c0;
		transition: 0.4s;
		cursor: pointer;

		:hover {
			text-decoration: underline;
			color: #c45500;
		}
	}

	div.copyRight span {
		font-size: 12.5px !important;
		line-height: 1.5 !important ;
		margin: 8px;
		margin-bottom: 0;
		color: #555;
	}
`

const Title = styled.h1`
	font-weight: 400;
	font-size: 28px;
	line-height: 1.2;
	margin-bottom: 20px;
	width: 100%;
	text-align: center;
`

const FormWrapper = styled.div`
	border-radius: 4px;
	padding: 14px 18px;
	border: 1px #ddd solid;
	background: #fff;
	margin-bottom: 20px;

	p {
		margin-top: 18px !important;
		font-size: 12.5px !important;
		line-height: 1.5 !important ;

		span {
			color: #0066c0;
			transition: 0.4s;
			cursor: pointer;

			:hover {
				text-decoration: underline;
				color: #c45500;
			}
		}
	}

	p.sigin_in {
		cursor: pointer;
		font-size: 0.8em !important;
		display: flex;
		align-items: center;
		transition: 0.4s;

		span:hover {
			text-decoration: underline;
			color: #c45500;
		}

		.arrow {
			font-size: 1rem;
			color: #0066c0;
			text-decoration: underline;

			:hover {
				text-decoration: underline;
				color: #c45500;
			}
		}
	}
`

const SignWthGoogleContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 25px;
	justify-content: center;
	padding: 12px 1rem;
	border-radius: 5px;
	padding: 0.25rem 1.2rem;
	text-decoration: none;
	min-height: 2.4em;
	font: inherit;
	background: #f5e7ea;
	border: 1px solid #f5e7ea;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.3s;

	a {
		cursor: pointer;
		display: inline-block;
		font-size: 0.9em !important;
		transition: 0.4s;

		color: #0066c0;
		:hover {
			text-decoration: underline;
			color: #c45500;
		}
	}

	img {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
`
