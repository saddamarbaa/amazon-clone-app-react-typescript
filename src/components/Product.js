/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product = ({ title, image, rating, price }) => {
	//  function to truncate(cut) the string if the length of given string
	//   bigger than  given number(n)
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
	};

	return (
		<Wrapper>
			<div className='inner__container'>
				<ProductInfo>
					<p className='product__title'>{truncate(title, 100)}</p>
					<p className='product__price'>
						<small>$</small>
						<strong> {price}</strong>
					</p>
					<p className='product__rating'>
						{Array(rating)
							.fill()
							.map((star) => {
								return <span key={uuidv4()}>✶</span>;
							})}
					</p>
				</ProductInfo>

				<LazyLoadImage
					effect='blur'
					placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
					className='product__image'
					src={image}
					alt='demo image'
				/>

				<button>Add to Basket</button>
			</div>
		</Wrapper>
	);
};

export default memo(Product);

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: white;
	z-index: 10;
	max-height: 420px;
	height: 420px;
	padding: 20px;
	width: 100%;
	margin: 10px;

	@media (max-width: 359px) {
		max-height: 450px;
		height: 450px;
	}

	.inner__container {
		max-width: 300px;
		min-width: 300px;

		@media (max-width: 339px) {
			max-width: 250px;
			min-width: 25px;
			padding: 0 10px;
		}
	}

	img.product__image {
		display: block;
		object-fit: contain;
		height: 150px;
		object-fit: contain;
		margin-top: 10px;
		margin-bottom: 15px;
	}

	button {
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
		@media (max-width: 339px) {
			margin-left: 10px;
		}
	}
`;

const ProductInfo = styled.div`
	min-height: 120px;
	max-height: 170px;
	overflow: hidden;

	@media (max-width: 359px) {
		min-height: 150px;
		max-height: 200px;
	}

	.product__title {
		font-size: 1rem;
		width: 100%;
		font-weight: 400;
		line-height: 1.5;
		overflow: hidden;
		max-height: 150px;
		height: 100px;
		overflow: hidden;

		:hover {
			color: #c45500 !important;
		}
		@media (max-width: 359px) {
			height: 130px;
			padding: 10px;
		}
	}

	.product__price {
		margin-top: 7px;
		margin-bottom: 3px;

		@media (max-width: 359px) {
			padding: 0 10px;
		}
	}

	.product__rating {
		color: #f6991e;
		font-size: 1em;
		font-weight: bold;

		@media (max-width: 359px) {
			padding: 0 10px;
		}
	}
`;
