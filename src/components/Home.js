/** @format */

import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
import request from "../api/requests";
import Banner from "./Banner";

const Home = () => {
	return (
		<Wrapper>
			<Banner />

			<Product fetchUrl={request.fetchAll} />
			<Product fetchUrl={request.fetchElectronics} />

			{/* <Product fetchUrl={request.fetchWomenClothing} />
			<Product fetchUrl={request.fetchJewelery} />
			<Product fetchUrl={request.fetchMenClothing} /> */}
		</Wrapper>
	);
};

export default memo(Home);

const Wrapper = styled.div`
	width: 100%;
	max-width: 1500px;
`;
