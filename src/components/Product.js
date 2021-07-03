/** @format */

import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch } from "react-redux";
import { setAddToBasketState } from "../features/basket/basketSlice";
import Fade from "react-reveal/Fade";

const Product = ({ id, title, image, price, category, description, stock }) => {
	const [starRating, setStarRating] = useState(3);
	const dispatch = useDispatch();

	const addToBasketHandler = (event) => {
		event.preventDefault();

		dispatch(
			setAddToBasketState({
				item: {
					id: uuidv4(),
					title: title,
					image: image,
					rating: starRating,
					price: price,
					category: category,
					description: description,
					stock: stock,
				},
			}),
		);
	};

	// call fetchMoviesData()
	useEffect(() => {
		setStarRating(Math.floor(Math.random() * 6));
	}, [id]);

	//  function to truncate(cut) the string if the length of given string
	//   bigger than  given number(n)
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
	};

	return (
		<Fade bottom cascade>
			<Wrapper>
				<div className='product_container'>
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
							<p className='product__title'>{truncate(title, 55)}</p>

							<p className='product__rating'>
								{Array(starRating ? starRating : 4)
									.fill()
									.map((star) => {
										return <span key={uuidv4()}>✶</span>;
									})}
							</p>

							<p className='description__container'>
								{truncate(description, 70)}
							</p>

							<p className='product__price'>
								<small>$</small>
								<strong>{price}</strong>
							</p>
							<p className='product__info-stock'>
								{stock ? stock : "In Stock - order soon."}
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
				</div>
			</Wrapper>
		</Fade>
	);
};

export default memo(Product);

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-grow: 1;
	background-color: white;
	margin: 10px;
	max-width: 1500px;
	overflow: hidden;

	@media (max-width: 300px) {
		overflow: auto;
	}

	.product_container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-height: 540px;
		height: 540px;
		padding: 20px;
		max-width: 340px;
		width: 100%;

		@media (max-width: 380px) {
			max-height: 570px;
			height: 570px;
		}
	}

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
		font-size: 0.9rem;
		margin-top: -10px;
		margin-bottom: 20px;
		color: grey;
		color: #007185;

		@media (max-width: 400px) {
			padding: 0 10px;
		}

		:hover {
			color: #c7511f !important;
		}
	}

	.image__container {
		display: flex;
		justify-content: center;
		height: 190px;
	}

	img.product__image {
		display: block;
		object-fit: contain;
		height: 100%;
		width: 100%;
	}

	.description__container {
		font-size: 0.9rem;

		max-height: 50px;
		overflow: hidden;
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
		margin-top: 15px;
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
	min-height: 130px;
	max-height: 250px;
	overflow: hidden;
	padding-top: 15px;

	@media (max-width: 380px) {
		min-height: 190px;
		max-height: 290px;
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
		margin: 10px 0;
		margin-bottom: 5px;
		@media (max-width: 400px) {
			padding: 0 10px;
		}
	}

	.product__info-stock {
		font-size: 15px;
		color: #c45500;

		@media (max-width: 400px) {
			padding: 0 10px;
		}

		@media (max-width: 300px) {
			max-height: 20px;
			overflow: hidden;
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
