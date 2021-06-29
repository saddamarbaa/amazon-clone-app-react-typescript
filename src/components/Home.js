/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import ProductFeed from "./ProductFeed ";
import request from "../api/requests";
import Banner from "./Banner";
import Product from "./Product";
import productData from "../Data";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
	return (
		<Wrapper>
			<Banner />
			<GridContainer>
				{productData?.map(
					({ id, title, image, price, category, description, stock }) => {
						return (
							<Product
								key={uuidv4()}
								id={id}
								title={title}
								image={process.env.PUBLIC_URL + "/items/" + image}
								price={price}
								stock={stock}
								category={category}
								description={description}
							/>
						);
					},
				)}
			</GridContainer>

			<ProductFeed fetchUrl={request.fetchAll} />
			<ProductFeed fetchUrl={request.fetchElectronics} />

			{/* <ProductFeed  fetchUrl={request.fetchWomenClothing} />
			<ProductFeed  fetchUrl={request.fetchJewelery} />
			<ProductFeed  fetchUrl={request.fetchMenClothing} /> */}
		</Wrapper>
	);
};

export default memo(Home);

const Wrapper = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	max-width: 1500px;
	align-items: center;
	max-width: 1500px;
	margin: 0 auto;
`;

const GridContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	box-sizing: border-box;
`;
