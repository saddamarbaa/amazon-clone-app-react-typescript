/** @format */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Banner = () => {
	return (
		<Wrapper>
			<BannerContainer>
				<Carousel
					infiniteLoop
					autoPlay
					showStatus={false}
					showIndicators={false}
					showThumbs={false}
					interval={4000}>
					<div>
						<img src='/images/banner3.jpg' alt='amazon banner' />
					</div>
					<div>
						<img src='/images/banner5.jpg' alt='amazon banner' />
					</div>
					<div>
						<img src='/images/baner7.jpg' alt='amazon banner' />
					</div>

					<div>
						<img src='/images/banner8.jpg' alt='amazon banner' />
					</div>

					<div>
						<img src='/images/banner4.jpg' alt='amazon banner' />
					</div>

					<div>
						<img src='/images/banner.jpg' alt='amazon banner' />
					</div>

					<div>
						<img src='/images/banner2.jpg' alt='amazon banner' />
					</div>

					<div>
						<img src='/images/banner10.jpg' alt='amazon banner' />
					</div>
				</Carousel>
			</BannerContainer>
		</Wrapper>
	);
};

export default Banner;

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

	img {
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
