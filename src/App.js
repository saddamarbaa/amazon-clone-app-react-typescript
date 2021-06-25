/** @format */

import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Home";

function App() {
	return (
		<AppWrapper>
			<Header />
			<Home />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	min-height: 100vh;
	width: 100vw;
	max-width: 100vw;
`;
