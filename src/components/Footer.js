/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<Wrapper>
			<div
				className='scrollToTop'
				style={{ display: visible ? "block" : "none" }}>
				<span onClick={scrollToTop}>Back to top</span>
			</div>
			<div className='first_footer-part'>
				<Container>
					<div className='wrapper-div'>
						<h2>Get to Know Us</h2>
						<a href='#'>Careers</a>
						<a href='#'>Blog</a>
						<a href='#'>About Amazon</a>
						<a href='#'>Investor Relations</a>
						<a href='#'>Careers</a>
						<a href='#'>Amazon Devices</a>
					</div>

					<div className='wrapper-div'>
						<h2>Make Money with Us</h2>
						<a href='#'>Sell products on Amazon</a>
						<a href='#'>Sell on Amazon Business</a>
						<a href='#'>Sell apps on Amazon</a>
						<a href='#'>Become an Affiliate</a>
						<a href='#'>Advertise Your Products</a>
						<a href='#'>Self-Publish with Us</a>
						<a href='#'>Host an Amazon Hub</a>
						<a href='#'>See More Make Money with Us</a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Payment Products</h2>
						<a href='#'>Amazon Business Card</a>
						<a href='#'>Shop with Points</a>
						<a href='#'>Reload Your Balance</a>
						<a href='#'>Amazon Currency Converter</a>
					</div>

					<div className='wrapper-div'>
						<h2>Let Us Help You</h2>
						<a href='#'>Amazon and COVID-19</a>
						<a href='#'>Your Account</a>
						<a href='#'>Your Orders</a>
						<a href='#'>Shipping Rates & Policies</a>
						<a href='#'>Returns & Replacements</a>
						<a href='#'>Manage Your Content and Devices</a>
						<a href='#'>Amazon Assistant</a>
						<a href='#'>Help</a>
					</div>
				</Container>
			</div>

			<div className='middle_footer-part'>
				<div className='middle_part-container'>
					<Link to='/'>
						<img
							className='amazon-logo'
							src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
							alt='amazon-logo'
						/>
					</Link>
					<div className='second-wrap'>
						<div>
							<LanguageIcon className='language' /> English
						</div>
						<div> $ USD-U.S Dollar</div>
						<div>
							<img
								className='us-flag'
								src='https://pngimg.com/uploads/flags/flags_PNG14592.png'
								alt='usa lag'
							/>
							United States
						</div>
					</div>
				</div>
			</div>

			<div className='first_footer-part second_footer-part'>
				<Container className='modified_container'>
					<div className='wrapper-div'>
						<h2>Amazon Music</h2>
						<a href='#'>Stream millions of songs</a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Advertising</h2>
						<a href='#'>Find, attract, and engage customers</a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Drive </h2>
						<a href='#'>Cloud storage from Amazon</a>
					</div>

					<div className='wrapper-div'>
						<h2>6pm</h2>
						<a href='#'> Score deals on fashion brands</a>
					</div>
					<div className='wrapper-div'>
						<h2> AbeBooks</h2>
						<a href='#'>Books, art & collectibles</a>
					</div>
					<div className='wrapper-div'>
						<h2>ACX </h2>
						<a href='#'> Audiobook Publishing Made Easy</a>
					</div>
					<div className='wrapper-div'>
						<h2>Alexa </h2>
						<a href='#'> Actionable Analytics for the Web</a>
					</div>
					<div className='wrapper-div'>
						<h2>Amazon Business </h2>
						<a href='#'> Everything For Your Business</a>
					</div>
					<div className='wrapper-div'>
						<h2> Audible </h2>
						<a href='#'>Listen to Books & Original Audio Performances</a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Global</h2>
						<a href='#'> Ship Orders Internationally</a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Advertising</h2>
						<a href='#'>Find, attract, and engage customers</a>
					</div>

					<div className='wrapper-div'>
						<h2>Home Services </h2>
						<a href='#'>Experienced Pros Happiness Guarantee</a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Ignite</h2>
						<a href='#'>
							Sell your original Digital Educational Resources
						</a>
					</div>
					<div className='wrapper-div'>
						<h2> Amazon Web Services</h2>
						<a href='#'>Scalable Cloud Computing Services</a>
					</div>
					<div className='wrapper-div'>
						<h2>Book </h2>
						<a href='#'>Depository Books With Free Delivery Worldwide</a>
					</div>

					<div className='wrapper-div'>
						<h2> Box Office Mojo </h2>
						<a href='#'> Find Movie Box Office Data </a>
					</div>

					<div className='wrapper-div'>
						<h2>ComiXology</h2>
						<a href='#'> Thousands of Digital Comics</a>
					</div>

					<div className='wrapper-div'>
						<h2>DPReview Digital</h2>
						<a href='#'> Photography</a>
					</div>

					<div className='wrapper-div'>
						<h2>East Dane</h2>
						<a href='#'> Designer Men's Fashion</a>
					</div>

					<div className='wrapper-div'>
						<h2>Fabric </h2>
						<a href='#'>Sewing, Quilting & Knitting</a>
					</div>
					<div className='wrapper-div'>
						<h2> Goodreads</h2>
						<a href='#'> Book reviews & recommendations</a>
					</div>

					<div className='wrapper-div'>
						<h2>IMDb </h2>
						<a href='#'>Movies, TV & Celebrities</a>
					</div>
					<div className='wrapper-div'>
						<h2> IMDbPro </h2>
						<a href='#'>Get Info Entertainment Professionals Need </a>
					</div>

					<div className='wrapper-div'>
						<h2>Ring Smart</h2>
						<a href='#'> Home Security Systems </a>
					</div>

					<div className='wrapper-div'>
						<h2>eero WiFi</h2>
						<a href='#'> Stream 4K Video in Every Room</a>
					</div>

					<div className='wrapper-div'>
						<h2>Shopbop </h2>
						<a href='#'>Designer Fashion Brands</a>
					</div>

					<div className='wrapper-div'>
						<h2>Blink </h2>
						<a href='#'> Smart Security for Every Home </a>
					</div>
					<div className='wrapper-div'>
						<h2>Zappos </h2>
						<a href='#'> Shoes & Clothing</a>
					</div>

					<div className='wrapper-div'>
						<h2>Neighbors App</h2>
						<a href='#'> Real-Time Crime & Safety Alerts </a>
					</div>

					<div className='wrapper-div'>
						<h2>Amazon Subscription Boxes</h2>
						<a href='#'>Top subscription boxes – right to your door</a>
					</div>

					<div className='wrapper-div'>
						<h2>Shopbop </h2>
						<a href='#'>Designer Fashion Brands</a>
					</div>

					<div className='wrapper-div'>
						<h2>PillPack </h2>
						<a href='#'> Pharmacy Simplified</a>
					</div>
					<div className='wrapper-div'>
						<h2>Amazon Second Chance </h2>
						<a href='#'>Pass it on, trade it in, give it a second life</a>
					</div>
				</Container>
			</div>
			<ConditionsOfUse>
				<a href='#'>Conditions of Use</a>
				<a href='#'>Privacy Notice</a>
				<a href='#'>Interest-Based Ads</a>
				<a className='last__link' href='#'>
					&copy; 1996-2021, Amazon.com, Inc. or its affiliates
				</a>
			</ConditionsOfUse>
		</Wrapper>
	);
};

export default memo(Footer);

const Wrapper = styled.div`
	width: 100vw;
	font-family: "Amazon Ember", Arial, sans-serif;
	background: #232f3e;
	margin: 0 auto;
	height: auto;
	color: white;

	h2 {
		font-size: 0.85rem;
		margin-bottom: 10px;
	}

	a {
		margin-top: 10px;
		color: white;
		display: block;
		line-height: 19px;
		font-size: 14px;
		line-height: 20px;
		font-family: Arial, sans-serif;
		color: #ddd;

		&:hover {
			text-decoration: underline;
		}
	}

	.scrollToTop {
		display: flex;
		background-color: #37475a;
		margin-bottom: 40px;
		transition: 0.4s;
		display: block;
		text-align: center;
		color: white;
		padding: 15px 0;
		line-height: 19px;
		font-size: 13px;
		border: 1px dotted grey;

		&:hover {
			background: #232f3e;
		}

		span {
			cursor: pointer;
		}
	}

	.first_footer-part {
		display: flex;
		justify-content: center;
		padding: 0 20px;
		border-bottom: 1px solid #37475a;
	}

	.first_footer-part.second_footer-part {
		background: #131921;
		border-bottom: none;
		padding: 20px;

		.wrapper-div {
			width: 120px;
			min-width: 110px;
			margin-top: 5px;
			height: 80px;
			overflow: hidden;
		}

		.modified_container {
			min-height: 80px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			overflow: hidden;
		}

		h2 {
			font-size: 0.7rem;
			margin-bottom: 0px;
		}

		a {
			font-size: 12px;
			margin-top: 0px;
			color: #ddd;
			line-height: 1.3;
		}
	}

	.middle_footer-part {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		max-height: 320px;
		margin-bottom: 20px;

		img.amazon-logo {
			display: flex;
			align-items: center;
			height: 50px;
			width: 100px;
			margin-right: 15px;
			object-fit: contain;
			transition: 0.4s;
			padding: 10px 15px;
		}

		img.us-flag {
			width: 30px;
			height: 20px;
			margin-right: 10px;
		}

		.language {
			margin-right: 10px;
		}

		.middle_part-container {
			width: 100%;
			min-height: 100px;
			font-size: 0.8em;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-width: 789px) {
				flex-direction: column;
			}

			div.second-wrap {
				width: 450px;
				margin-left: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				@media (max-width: 689px) {
					width: 100%;
					flex-direction: columns;
					flex-wrap: wrap;
					margin: 0px auto;
				}

				div {
					cursor: pointer;
					display: flex;
					align-items: center;
					margin-right: 10px;
					height: 50px;
					min-width: 170px;
					box-shadow: 7px -1px 24px 5px rgba(18, 25, 53, 0.75);
					margin-right: 10px;
					padding: 10px 15px;
					border: 1px solid white;

					@media (max-width: 600px) {
						min-width: 250px;
						margin: 10px auto;
					}
				}
			}
		}
	}
`;

const Container = styled.div`
	width: 1000px;
	max-width: 1000px;
	min-height: 300px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	overflow: hidden;
	.wrapper-div {
		width: 200px;
		margin-top: 25px;
		margin-right: 10px;
		padding-bottom: 30px;
	}
`;

const ConditionsOfUse = styled.div`
	display: flex;
	justify-content: center;

	background: #131921;
	padding: 40px 20px;
	line-height: 19px;
	font-size: 1.2px;
	flex-wrap: wrap;

	@media (max-width: 568px) {
		padding: 20px;
		padding-top: 0px;
		flex-direction: columns;
		justify-content: flex-start;
		align-items: flex-start;
		padding-bottom: 40px;

		a {
			margin: 3px;
		}
	}

	a {
		margin-right: 10px;
		font-size: 0.7rem;
		color: white;
	}

	a.last__link {
		cursor: none;

		&:hover {
			text-decoration: none;
		}
	}
`;
