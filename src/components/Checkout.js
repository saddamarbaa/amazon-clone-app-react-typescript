/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SubTotal from "./SubTotal";

const Checkout = () => {
	return (
		<Wrapper>
			<BannerContainer>
				<LazyLoadImage
					effect='blur'
					placeholderSrc='"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg'
					src='/images/banner2.jpg'
					alt='amazon banner'
					className='homeImage'
				/>
			</BannerContainer>

			<TotalCeckOutContainer>
				<CheckOutLeft>
					<h2 className='checkout__title'>Your Shopping Basket</h2>
				</CheckOutLeft>

				<CheckOutRight>
					<SubTotal />
				</CheckOutRight>
			</TotalCeckOutContainer>
		</Wrapper>
	);
};

export default memo(Checkout);

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const BannerContainer = styled.div`
	z-index: -3 !important;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-right: auto;
	margin-left: auto;
	max-width: 1500px;
	margin-top: -10px;
	margin-bottom: -25% !important;

	img.homeImage {
		width: 100%;
		max-width: 100%;
		max-height: 100%;
		z-index: -3 !important;
		object-fit: contain;
		mask-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0)
		);
	}
`;

const TotalCeckOutContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 20px;
	height: max-content;
	display: flex;
	justify-content: space-between;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`;

const CheckOutLeft = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	flex: 0.7;
	margin-right: 18px;
	padding: 20px;

	@media (max-width: 992px) {
		min-width: 85vw;
		max-width: 85vw;
	}

	@media (min-width: 992px) {
		.CartItems {
			min-width: auto;
		}
	}

	.checkout__title {
		margin-right: 10px;
		padding: 10px;
		border-bottom: 1px solid lightgray;
	}
`;

const CheckOutRight = styled.div`
	flex: 0.3;
	background-color: white;
	min-width: 300px;
	width: 100%;
	height: 200px;
	padding: 20px;
	margin-right: 20px;

	@media (max-width: 992px) {
		min-width: 85vw;
		max-width: 85vw;
	}
`;
