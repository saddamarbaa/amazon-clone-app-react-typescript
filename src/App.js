/** @format */

import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
function App() {
	return (
		<AppWrapper>
			<Header />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	min-height: 100vh;
	width: 100vw;
	
`;
