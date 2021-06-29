/** @format */

import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from "../api/axios";
import Product from "./Product";

const ProductFeed = ({ fetchUrl }) => {
	// Initialize Product variable with empty array
	const [products, setProducts] = useState([]);

	// function to fetch Product information
	async function fetchProductData() {
		try {
			const request = await axios.get(fetchUrl);
			setProducts(request.data);
			return request;
		} catch (error) {
			console.log(error);
		}
	}

	// call fetchMoviesData()
	useEffect(() => {
		fetchProductData();
	}, [fetchUrl]);

	return (
		<GridContainer>
			{products?.map(
				({ id, title, image, price, category, description, stock }) => {
					return (
						<Product
							key={uuidv4()}
							id={id}
							title={title}
							image={image}
							price={price}
							category={category}
							description={description}
							stock={stock}
						/>
					);
				},
			)}
		</GridContainer>
	);
};

export default memo(ProductFeed);

const GridContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	box-sizing: border-box;
`;
