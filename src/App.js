/** @format */

import { memo, React, useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/CheckoutProduct";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { auth } from "./config/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setLogInState,
	setLogOutState,
	selectUser,
} from "./features/user/userSlice";
import Payment from "./components/Payment";
import Order from "./components/Order";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser); // grab the user from global state

	// keep user login In
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
			if (authenticatedUser) {
				// User is signed in / The User was Logged in,
				// dispatch an action and change the state(save user in the global store)

				dispatch(
					setLogInState({
						displayName: authenticatedUser.displayName
							? authenticatedUser.displayName
							: "",
						uid: authenticatedUser.uid,
						email: authenticatedUser.email,
					}),
				);
				// console.log("authenticated is User object", authenticatedUser);
			} else {
				// User is signed out
				// dispatch an action and change the state(remove a user from  the global store)
				dispatch(setLogOutState());
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	return (
		<AppWrapper>
			<Router>
				{!user ? (
					<SignUpScreen />
				) : (
					<Switch>
						<Route path='/' exact>
							<Header />
							<Home />
							<Footer />
						</Route>
						<Route path='/CheckoutProduct'>
							<Header />
							<Checkout />
							<Footer />
						</Route>
						<Route path='/login' exact>
							<LoginScreen />
						</Route>
						<Route path='/register' exact>
							<SignUpScreen />
						</Route>
						<Route path='/Payment'>
							<Header />
							<Payment />
							<Footer />
						</Route>

						<Route path='/order'>
							<Header />
							<Order />
							<Footer />
						</Route>
					</Switch>
				)}
			</Router>
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	min-height: 100vh;
	width: 100vw;
	max-width: 100vw;
`;
