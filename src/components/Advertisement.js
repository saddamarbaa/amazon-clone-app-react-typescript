/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

const Advertisement = () => {
	return (
		<Wrapper>
			<div className='first__container'>
				<div className='menu'>
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
		</Wrapper>
	);
};

export default memo(Advertisement);

const Wrapper = styled.div`
	width: 100%;
	max-width: 1500px;
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

	@media (max-width: 576px) {
		justify-content: flex-end;
	}

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
`;
