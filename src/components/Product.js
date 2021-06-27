/** @format */

import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "../api/axios";

import { useDispatch, useSelector } from "react-redux";
import {
	setAddToBasketState,
	setRemoveFromBasketState,
	selectBasket,
} from "../features/basket/basketSlice";

const Product = ({ fetchUrl }) => {
	// Initialize Product variable with empty array
	const [product, setProducts] = useState([]);
	const [starRating, setStarRating] = useState(3);

	const dispatch = useDispatch();
	const basket = useSelector(selectBasket); // grab the basket from global state

	const addToBasketHandler = (
		event,
		id = starRating * 120,
		title = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		image = "https://fakestoreapi.com…PKd-2AYL._AC_SL1500_.jpg",
		price = 109.95,
		category = "men's clothing",
		description = "Your perfect pack for ev…d sleeve, your everyday",
	) => {
		event.preventDefault();

		dispatch(
			setAddToBasketState({
				item: {
					id: id,
					title: title,
					image: image,
					rating: starRating,
					price: price,
					category: category,
				},
			}),
		);
	};

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
		setStarRating(Math.floor(Math.random() * 6));
		fetchProductData();
		setStarRating(Math.floor(Math.random() * 4));
	}, [fetchUrl]);

	//  function to truncate(cut) the string if the length of given string
	//   bigger than  given number(n)
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
	};

	return (
		<GridContainer>
			{product?.map(({ id, title, image, price, category, description }) => {
				return (
					<ProductRowContainer key={uuidv4()}>
						<Wrapper>
							<div className='category__container'>{category}</div>
							<div className='inner__container'>
								<div className='image__container'>
									<LazyLoadImage
										effect='blur'
										placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
										className='product__image'
										src={image}
										alt='demo image'
										height={190}
										weight={190}
										objectFit='contain'
									/>
								</div>
								<ProductInfo>
									<p className='product__title'>
										{truncate(title, 55)}
									</p>

									<p className='product__rating'>
										{Array(starRating ? starRating : 4)
											.fill()
											.map((star) => {
												return <span key={uuidv4()}>✶</span>;
											})}
									</p>

									<p className='description__container'>
										{truncate(description, 60)}
									</p>

									<p className='product__price'>
										<small>$</small>
										<strong>{price}</strong>
									</p>
								</ProductInfo>

								<button
									onClick={(event) =>
										addToBasketHandler(
											event,
											id,
											title,
											image,
											price,
											category,
											description,
										)
									}>
									Add to Basket
								</button>
							</div>
						</Wrapper>
					</ProductRowContainer>
				);
			})}
		</GridContainer>
	);
};

export default memo(Product);

const GridContainer = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	box-sizing: border-box;
`;

const ProductRowContainer = styled.div`
	width: 340px;
	margin: 20px;
	margin-left: 0;
	margin-bottom: 0;

	@media (max-width: 568px) {
		width: 85vw;
		margin-left: 0;
		margin-right: 0;
	}
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 505px;
	height: 505px;
	padding: 20px;
	width: 100%;
	background-color: white;

	.inner__container {
		max-width: 300px;
		min-width: 300px;

		@media (max-width: 339px) {
			max-width: 250px;
			min-width: 250px;
			padding: 0 10px;
		}
	}

	.category__container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		font-size: 0.87rem;
		margin-top: -10px;
		margin-bottom: 20px;
		color: grey;

		@media (max-width: 400px) {
			padding: 0 10px;
		}

		:hover {
			color: #c45500 !important;
		}
	}

	.image__container {
		display: flex;
		justify-content: center;
	}

	img.product__image {
		display: block;
		object-fit: contain;
		height: 150px;
		object-fit: contain;
	}

	.description__container {
		font-size: 0.9rem;

		@media (max-width: 400px) {
			padding: 0 10px;
		}

		:hover {
			color: #c45500 !important;
		}
	}

	button {
		width: 100%;
		display: block;
		cursor: pointer;
		padding: 7px 15px;
		border: 1px solid;
		background: #f0c14b;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;
		border-radius: 3px;
		cursor: pointer;
		text-align: center;
		transition: 0.4s;
		:hover {
			background: #f4d078;
			background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
			background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
		}

		@media (max-width: 568px) {
			width: 90%;
		}

		@media (max-width: 400px) {
			margin-left: 10px;
		}
	}
`;

const ProductInfo = styled.div`
	min-height: 120px;
	max-height: 240px;
	overflow: hidden;

	@media (max-width: 380px) {
		min-height: 150px;
		max-height: 200px;
	}

	.product__title {
		font-size: 1rem;
		width: 100%;
		font-weight: 400;
		line-height: 1.5;
		overflow: hidden;
		max-height: 100px;
		height: 60px;
		min-height: 60px;
		overflow: hidden;
		:hover {
			color: #c45500 !important;
		}

		@media (max-width: 400px) {
			height: 130px;
			padding: 10px;
		}
	}

	.product__price {
		margin: 13px 0;
		@media (max-width: 400px) {
			padding: 0 10px;
		}
	}

	.product__rating {
		margin: 13px 0;
		color: #f6991e;
		font-size: 1em;
		font-weight: bold;

		@media (max-width: 400px) {
			padding: 0 10px;
		}
	}
`;
