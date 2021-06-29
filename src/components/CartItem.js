/** @format */

import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import { setRemoveFromBasketState } from "../features/basket/basketSlice";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CartItem = ({
	id,
	title,
	image,
	price,
	category,
	description,
	stock,
}) => {
	const [starRating, setStarRating] = useState(3);

	const dispatch = useDispatch();

	// call fetchMoviesData()
	useEffect(() => {
		setStarRating(Math.floor(Math.random() * 6));
	}, [id]);

	//  function to truncate(cut) the string if the length of given string
	//   bigger than  given number(n)
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
	};

	const removeToBasketHandler = (event, id) => {
		event.preventDefault();
		dispatch(
			setRemoveFromBasketState({
				id: id,
			}),
		);
	};

	return (
		<Wrapper className='checkoutProduct'>
			<div className='product__image'>
				<LazyLoadImage
					effect='blur'
					placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
					src={image}
					alt='demo image'
				/>
			</div>

			<div className='checkoutProduct__info'>
				<div className='checkoutProduct__title'>
					<h2>{title}</h2>
				</div>

				<div className='checkoutProduct__description'>
					{truncate(description, 260)}
				</div>

				<div className='checkoutProduct__info-stock'>
					{stock ? stock : "In Stock"}
				</div>
				<div className='checkoutProduct__rating'>
					{Array(starRating ? starRating : 4)
						.fill()
						.map((star) => {
							return <span key={uuidv4()}>✶</span>;
						})}
				</div>
				<button
					className='checkoutProduct__showButton'
					onClick={(event) => removeToBasketHandler(event, id)}>
					Remove From Basket
				</button>
			</div>
			<div className='checkoutProduct__price'>
				<NumberFormat
					value={price}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
					decimalScale={2}
				/>
			</div>
			<button className='checkoutProduct__hideButton'>
				Remove From Basket
			</button>
		</Wrapper>
	);
};

export default memo(CartItem);

const Wrapper = styled.div`
	display: flex;
	border-bottom: 1px solid #ddd;
	padding-top: 12px;
	padding-bottom: 12px;
	flex-direction: column;

	@media (min-width: 992px) {
		flex-direction: row;
	}

	.product__image {
		flex-grow: 0;
		flex-shrink: 0;
		padding-bottom: 12px;
		margin-right: 1rem;

		img {
			width: 100%;
			height: 100%;
			width: 190px;
			height: 190px;
			object-fit: contain;
		}
	}

	.checkoutProduct__info {
		flex-grow: 1;
	}

	.checkoutProduct__title h2 {
		margin: 0;
		font-size: 18px;
		color: #007185;
		margin: 13px 0;

		:hover {
			color: #c45500 !important;
		}
	}

	.checkoutProduct__description {
		font-size: 0.9rem;
		:hover {
			color: #c45500 !important;
		}
	}

	.checkoutProduct__info-stock {
		margin-top: 4px;
		color: #007600;
	}

	.checkoutProduct__price {
		font-size: 18px;
		font-weight: 700;
		margin-left: 16px;
		padding-top: 10px;
		padding-top: 10px;

		@media (max-width: 991px) {
			margin-left: 0px;
		}
	}

	.checkoutProduct__rating {
		margin: 13px 0;
		color: #f6991e;
		font-size: 1em;
		font-weight: bold;
	}

	button.checkoutProduct__showButton {
		@media (max-width: 992px) {
			display: none;
		}
	}

	button {
		font-size: 1rem;
		display: block;
		cursor: pointer;
		padding: 7px 15px;
		border: 1px solid;
		background: #f0c14b;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;
		border-radius: 5px;
		cursor: pointer;
		text-align: center;
		transition: 0.4s;

		:hover {
			background: #f4d078;
			background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
			background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
		}

		button:focus {
			outline: none;
		}

		.checkoutProduct__price {
			font-size: 18px;
			font-weight: 700;
			margin-left: 16px;
			padding-top: 10px;
			padding-top: 10px;
		}

		@media (max-width: 568px) {
			display: flex;
			width: 70%;
			order: 3;
		}
	}

	button.checkoutProduct__hideButton {
		display: none;

		@media (max-width: 991px) {
			display: block;
			width: fit-content;
			margin: 13px 0;
		}
	}
`;
