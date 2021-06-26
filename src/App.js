/** @format */

import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
	return (
		<AppWrapper>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>

					<Route path='/checkout'>
						<Checkout />
					</Route>
				</Switch>
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
