/** @format */

import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import React, { memo, useRef } from "react";
import { auth, provider } from "../config/firebase";

const LoginScreen = () => {
	const history = useHistory();
	const emailReference = useRef(null);
	const passwordReference = useRef(null);

	const signInWithEmailAndPasswordHandler = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailReference.current.value,
				passwordReference.current.value,
			)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				history.push("/");
			})
			.catch((error) => {
				// An error happened.
				// const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				history.push("/");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};

	return (
		<LogInWrapper>
			<Container>
				<Link to='/'>
					<img
						className='login__logo'
						src='/images/Amazon-login-logo.jpg'
						alt='logo'
					/>
				</Link>
				<FormWrapper>
					<Title>Sign-In </Title>
					<form autoComplete='off'>
						<label for='email'>Email </label>
						<input
							ref={emailReference}
							class='input'
							type='email'
							id='email'
							name='email'
							autoComplete='email'
							required></input>

						<label for='name'>Password </label>
						<input
							ref={passwordReference}
							class='input'
							type='password'
							name='password'
							autoComplete='new-password'
							autocapitalize='none'
							required></input>

						<button
							onClick={signInWithEmailAndPasswordHandler}
							class='button create-button'
							type='submit'
							name='submit'
							id='submit-form'>
							Sign In
						</button>
						<p>
							By creating an account, you agree to Amazon Clone
							<span> Conditions of Use </span>
							and <span> Privacy Notice</span>
						</p>

						<SignWthGoogleContainer>
							<img
								onClick={signInWithGoogleHandler}
								src='/images/google.png'
								alt="'Logo"
							/>
							<a onClick={signInWithGoogleHandler}>Login With Google</a>
						</SignWthGoogleContainer>
					</form>

					<h5>New to Amazon?</h5>
					<button
						onClick={() => history.push("/register")}
						class='new-account'
						type='submit'
						name='submit'
						id='submit-form'>
						Create your Amazon account
					</button>
				</FormWrapper>
				<div className='copyRight link'>
					<span> Conditions of Use</span> <span> Privacy Notice </span>{" "}
					<span> Help </span>
				</div>
				<div className='copyRight'>
					<span>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</span>
				</div>
			</Container>
		</LogInWrapper>
	);
};

export default memo(LoginScreen);

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
	font-family: "Amazon Ember", Arial, sans-serif;
`;

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
`;

const Title = styled.h1`
	font-weight: 400;
	font-size: 28px;
	line-height: 1.2;
	margin-bottom: 20px;
`;

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

	form {
		input {
			display: inline-flex;
			font-size: 1rem;
			height: 2em;
			justify-content: flex-start;
			line-height: normal;
			padding: 3px 7px;
			align-items: center;
			background-color: #fff;
			width: 100%;
			box-shadow: 0 1px 0 rgb(255 255 255 / 50%),
				0 1px 0 rgb(0 0 0 / 7%) inset;
			border: 1px solid #a6a6a6;
			border-top-color: #949494;
			transition: 0.4s;
			margin-bottom: 15px;

			:focus,
			:active {
				outline: 0 !important;
				border-color: #e77600;
				box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
			}
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
	}
`;

const SignWthGoogleContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 25px;

	a {
		cursor: pointer;
		display: inline-block;
		font-size: 0.8em !important;
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
`;
