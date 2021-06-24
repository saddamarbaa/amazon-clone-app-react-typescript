/** @format */

import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = () => {
	return (
		<Wrapper>
			<LogoContainer>
				<img src='/images/amazon-logo.png' alt='amazon-logo' />
			</LogoContainer>

			<SearchContainer>
				<input type='text' />
				<SearchIcon className='SearchIcon' />
			</SearchContainer>

			<NavContainer>
				<CountryFlagContainer>
					<img
						src='https://pngimg.com/uploads/flags/flags_PNG14592.png'
						alt='usa lag'
					/>
					<ArrowDropDownIcon />
				</CountryFlagContainer>

				<NavOption>
					<span className='firstOption'>Delivery to</span>
					<div className='secondOption location'>
						<LocationOnIcon />
						Location
					</div>
				</NavOption>

				<NavOption>
					<span className='firstOption'>Hello, Sign In</span>
					<span className='secondOption'>Account</span>
				</NavOption>
				<NavOption>
					<span className='firstOption'>Return</span>
					<span className='secondOption'>& Order</span>
				</NavOption>
				<NavOption>
					<span className='firstOption'>Your</span>
					<span className='secondOption'>Prime</span>
				</NavOption>

				<BasketOption>
					<ShoppingBasketIcon />
					<span className='basketCount'>0</span>
				</BasketOption>
			</NavContainer>

			<NavContainerHidden>
				<NavOption className='FirstHiddenOption'>
					<span className='firstOption'>Delivery to</span>
					<div className='secondOption location'>
						<LocationOnIcon />
						Location
					</div>
				</NavOption>
				<NavOption>
					<span className='firstOption'>Hello, Sign In</span>
					<span className='secondOption'>Account</span>
				</NavOption>

				<BasketOption>
					<ShoppingBasketIcon />
					<span className='basketCount'>0</span>
				</BasketOption>
			</NavContainerHidden>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	background: #131921;
	position: sticky;
	top: 0;
	z-index: 100;
	color: white;
	padding: 0 20px;
	display: flex;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100px;
	min-width: 100px;
	/* max-height: 60px; */
	margin-right: 20px;
	padding: 5px 10px;
	height: 45px;
	transition: 0.4s;

	&:hover {
		border: 1px solid white;
		box-shadow: 7px -1px 24px 5px rgba(18, 25, 53, 0.75);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const SearchContainer = styled.div`
	@media (max-width: 991px) {
		min-width: 100px;
	}

	@media (max-width: 568px) {
		display: none;
	}

	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;
	min-width: 400px;
	border-radius: 5px;
	margin-right: 20px;

	input {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		border: none;
		width: 100%;
		line-height: 15px;
		padding: 7px 10px 10px 10px;
		height: 38px;
		font-family: inherit;
		font-size: 17px;
		color: #111;
		outline: 0;
		transition: all 0.1s linear;

		:focus {
			border: 1px solid #cd9042;
		}
	}

	.SearchIcon {
		cursor: pointer;
		height: 38px;
		padding: 5px;
		background: #cd9042;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;

		:focus {
			border: 1px solid #cd9042;
		}
	}
`;

const NavContainer = styled.div`
	@media (max-width: 1200px) {
		display: none;
	}

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	min-width: 500px;
`;

const NavOption = styled.div`
	&:hover {
		border: 1px solid white;
	}

	padding: 5px 10px;
	height: 45px;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
	color: white;
	transition: 0.4s;

	.firstOption {
		font-size: 12px;
	}

	.secondOption {
		font-size: 14px;
		font-weight: 800;
	}

	.secondOption.location {
		display: flex;
	}
`;

const CountryFlagContainer = styled(NavOption)`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px 10px;
	height: 45px;
	transition: 0.4s;

	&:hover {
		border: 1px solid white;
		box-shadow: 7px -1px 24px 5px rgba(18, 25, 53, 0.75);
	}

	img {
		width: 30px;
		height: 20px;
	}
`;

const BasketOption = styled.div`
	display: flex;
	align-items: center;
	transition: 0.4s;
	padding: 5px 10px;
	height: 45px;
	transition: 0.4s;

	&:hover {
		border: 1px solid white;
		box-shadow: 7px -1px 24px 5px rgba(18, 25, 53, 0.75);
	}

	span {
		margin-left: 10px;
	}
`;

const NavContainerHidden = styled(NavContainer)`
	.LocationOption {
		border: 1px solid red;
		@media (max-width: 991px) {
		}
	}

	display: none;

	@media (max-width: 1200px) {
		display: flex;
		min-width: 100px;
	}

	@media (max-width: 568px) {
		flex: 1;

		.FirstHiddenOption {
			display: none;
		}
	}

	@media (max-width: 360px) {
		justify-content: space-between;
	}
`;
