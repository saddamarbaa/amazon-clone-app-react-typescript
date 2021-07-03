/** @format */

import { memo, React, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import Fade from "react-reveal/Fade";

const Advertisement = () => {
	const [burgerMenuStatus, SetBurgerMenuStatus] = useState(false);
	const user = useSelector(selectUser);

	return (
		<Wrapper>
			{/* Hidden Menue */}
			<div className='first__container hidden__menue'>
				<div
					className='menu'
					onClick={() => {
						SetBurgerMenuStatus(true);
					}}>
					<MenuIcon className='MenuIcon' /> All
				</div>
			</div>

			<div className='first__container'>
				<div
					className='menu'
					onClick={() => {
						SetBurgerMenuStatus(true);
					}}>
					<MenuIcon className='MenuIcon' /> All
				</div>
				<div>Today's Deals</div>
				<div>Customer Service</div>
				<div>Registry</div>
				<div>Sell </div>
			</div>
			<div className='second__container'>
				<div>Amazon's response to COVID-19 </div>
			</div>

			{/* Side bar */}
			<BurgerNav showMenu={burgerMenuStatus}>
				<Fade left>
					<div className='greeting'>
						<div className='greeting-div'>
							<IconButton>
								<AccountCircleIcon className='icon' />
							</IconButton>
							<h3>Hello {user?.displayName ? user.displayName : ""}</h3>
						</div>
						<IconButton>
							<CloseIcon
								className='icon'
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}
							/>
						</IconButton>
					</div>

					<h3>Digital Content & Devices</h3>

					<div className='links-container'>
						<li>
							<a>Amazon Music</a>
						</li>
						<li>
							<a>Kindle E-readers & Books</a>
						</li>
						<li>
							<a>Appstore for Android </a>
						</li>
					</div>

					<h3>Shop By Department</h3>
					<div className='links-container'>
						<li>
							<a>Electronics</a>
						</li>
						<li>
							<a>Computers</a>
						</li>
						<li>
							<a>Smart Home</a>
						</li>
						<li>
							<a>Arts & Crafts </a>
						</li>
					</div>

					<h3>Programs & Feature3</h3>
					<div className='links-container'>
						<li>
							<a>Gift Cards</a>
						</li>
						<li>
							<a>Amazon Live</a>
						</li>
						<li>
							<a>International Shopping </a>
						</li>
					</div>
					<h3>Help & Settings</h3>
					<div className='links-container'>
						<li>
							<a>Your Account </a>
						</li>
						<li>
							<a>English - EN </a>
						</li>
						<li>
							<a>Customs Services </a>
						</li>
					</div>
				</Fade>
			</BurgerNav>
		</Wrapper>
	);
};

export default memo(Advertisement);

const Wrapper = styled.div`
	width: 100vw;
	background: #232f3e;
	color: #fff;
	height: 41px;
	display: flex;
	align-items: center;
	padding: 3px 20px;
	justify-content: space-between;
	font-size: 0.9rem;
	flex-flow: row wrap;
	overflow: hidden;

	.first__container,
	.second__container,
	.first__container .menu {
		display: flex;
		align-items: center;
	}

	.first__container div,
	.second__container div,
	.first__container .menu {
		transition: 0.4s;
		cursor: pointer;
		margin-right: 10px;
		padding: 5px 10px;
		&:hover {
			border: 1px solid white;
			box-shadow: 7px -1px 24px 5px rgba(18, 25, 53, 0.75);
		}
	}

	.first__container {
		@media (max-width: 576px) {
			display: none;
		}
	}

	.first__container .menu {
		padding-left: 0;
	}
	.first__container .menu .MenuIcon {
		margin-right: 7px;
	}

	.first__container.hidden__menue {
		display: none;
		@media (max-width: 576px) {
			display: block;
		}
	}
`;

const BurgerNav = styled.div`
	transform: ${(props) =>
		props.showMenu ? "translateX(0)" : "translateX(-100%)"};
	transition: transform 0.3s;
	position: fixed;
	color: black;
	top: 0;
	left: 0;
	bottom: 0;
	overflow-y: auto;
	background: white !important;
	min-width: 300px;
	width: 350px;
	padding-bottom: 30px;

	@media (max-width: 576px) {
		width: 300px;
	}

	@media (max-width: 300px) {
		min-width: 250px;
		width: 250;
	}

	.greeting {
		color: white;
		background: #131921;
		padding: 10px 20px;
		padding-right: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.greeting-div {
			display: flex;
			align-items: center;

			h3 {
				padding: 0px;
			}
		}

		.icon {
			color: white;
			font-size: 1.2em;
		}
	}

	.links-container {
		padding: 0 20px;
	}

	h3 {
		padding: 20px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		width: 100%;
	}

	li {
		list-style-type: none;
		padding: 15px 0;
	}
	a {
		cursor: pointer;
	}
`;
