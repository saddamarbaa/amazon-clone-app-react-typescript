import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SignUpComponent from '../screens/SignUpScreen'
import { LoginSchemaValidation } from '../utils'
import { AuthLoginRequestType } from '../types'
import {
	auth,
	signInWithEmailAndPassword,
	googleProvider,
	signInWithPopup,
	GoogleAuthProvider,
} from '../config/firebase'

const LoginScreen = () => {
	const history = useNavigate()
	const [signIn, setSignIn] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthLoginRequestType>({
		resolver: yupResolver(LoginSchemaValidation),
	})

	if (signIn) {
		return <SignUpComponent />
	}

	const signInWithEmailAndPasswordHandler = (data: AuthLoginRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// signIn successful.
				const user = userCredential.user
				// console.log(user)
				// Redirect to the Home Screen
				history('/')
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
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
				const user = result.user
				history('/')
				// console.log(result, user)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
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
					<Title>Sign-In </Title>
					<form
						autoComplete="off"
						onSubmit={handleSubmit(signInWithEmailAndPasswordHandler)}>
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

						<button className="btn" type="submit" name="submit">
							Sign In
						</button>

						<p>
							By creating an account, you agree to Amazon Clone
							<span> Conditions of Use </span>
							and <span> Privacy Notice</span>
						</p>

						<SignWthGoogleContainer onClick={signInWithGoogleHandler}>
							<img src="/images/google.png" alt="'Logo" />
							<a>Login With Google</a>
						</SignWthGoogleContainer>
					</form>

					<h5>New to Amazon?</h5>
					<button
						onClick={() => setSignIn(true)}
						className="new-account"
						type="submit"
						name="submit"
						id="submit-form">
						Create your Amazon account
					</button>
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

export default memo(LoginScreen)

const LogInWrapper = styled.div`
	color: #111;
	width: 100vw;
	min-height: 100vh;
	font-size: 1rem;
	background: #fff;
	display: flex;
	justify-content: center;
	padding: 20px;
	padding-top: 5px;
	font-family: 'Amazon Ember', Arial, sans-serif;
`

const Container = styled.div`
	width: 350px;
	min-width: 350px;
	height: 530px;
	display: flex;
	align-items: center;
	flex-direction: column;

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
	text-align: center;
`

const FormWrapper = styled.div`
	border-radius: 4px;
	padding: 14px 18px;
	border: 1px #ddd solid;
	background: #fff;
	margin-bottom: 20px;

	button {
		width: 100%;
		display: block;
		background: #f0c14b;
		border-color: #a88734 #9c7e31 #846a29;
		height: 2em;
		border-radius: 3px;
		cursor: pointer;
		border-style: solid;
		border-width: 1px;
		transition: 0.4s;
		text-align: center;

		:hover {
			background: #f4d078;
			background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
			background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
		}
	}

	button.new-account {
		background: #e7e9ec;
		border-color: #adb1b8 #a2a6ac #8d9096;
		margin-bottom: 10px;
		min-height: 2.45em;
		padding: 0.25rem 1.2rem;
		font-size: 0.85em !important;
		:hover {
			border: 1px solid #e7e9ec;
			background: -webkit-linear-gradient(top, #e7e9ec, #e7e9ec);
		}
	}

	h5 {
		width: 100%;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 10px;
		line-height: 1;
		font-size: 14px;
		color: #767676;
		font-weight: 400;
		display: inline-block;
		background-color: #fff;
	}

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
