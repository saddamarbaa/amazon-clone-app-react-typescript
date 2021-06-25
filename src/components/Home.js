/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import Product from "./Product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
	return (
		<Wrapper>
			<Container>
				<LazyLoadImage
					effect='blur'
					placeholderSrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg'
					src='/images/banner.jpg'
					alt='amazon banner'
					className='homeImage'
				/>
			</Container>

			<ProductRowContainer>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={97}
				/>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={97}
				/>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={97}
				/>
			</ProductRowContainer>

			<ProductRowContainer>
				<Product
					title='Amazon Basics Ultrasonic Cleaner with Digital Display, 5 Preset Cycles, 750ml - white, 110V'
					image='https://m.media-amazon.com/images/I/61QgRuQxsFL._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={37}
				/>
			</ProductRowContainer>

			<ProductRowContainer>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/71kRlcrwKDL._AC_UL480_FMwebp_QL65_.jpg'
					rating={5}
					price={87}
				/>
				<Product
					title='Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6" Full HD IPS | AMD Ryzen 3 3350U Quad-Core Mobile Processor'
					image='	https://m.media-amazon.com/images/I/71W5ZdS+sEL._AC_UL480_FMwebp_QL65_.jpg'
					rating={87}
					price={65}
				/>
			</ProductRowContainer>

			<ProductRowContainer>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={97}
				/>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={97}
				/>
				<Product
					title='Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend'
					image='https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg'
					rating={3}
					price={97}
				/>
			</ProductRowContainer>
		</Wrapper>
	);
};

export default memo(Home);

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-right: auto;
	margin-left: auto;
	max-width: 1500px;
	margin-top: -10px;
	margin-bottom: -25% !important;
	min-height: 300px;

	@media (max-width: 576px) {
		margin-bottom: -40% !important;
	}

	img.homeImage {
		width: 100%;
		max-width: 100%;
		max-height: 100%;
		z-index: -3;
		object-fit: contain;
		mask-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0)
		);
	}
`;

const ProductRowContainer = styled.div`
	margin: auto;
	width: 92%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 576px) {
		flex-direction: column;
		width: 85%;
	}
`;
