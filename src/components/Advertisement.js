/** @format */

import React, { memo } from "react";
import styled from "styled-components";

const Advertisement = () => {
	return (
		<Wrapper>
			<div className='first__container'>
				<span>All Today's Deals</span>
				<span>Customer Service</span>
				<span>Registry</span>
				<span>Sell </span>
			</div>
			<div className='second__container'>
				<span>Amazon's response to COVID-19 </span>
			</div>
		</Wrapper>
	);
};

export default memo(Advertisement);

const Wrapper = styled.div`
	width: 100%;
	background: #232f3e;
	color: #fff;
	height: 40px;
	display: flex;
	align-items: center;
	padding: 3px 20px;
	justify-content: space-between;
	font-size: 0.9rem;
	flex-flow: row wrap;
	overflow: hidden;

	@media (max-width: 576px) {
		justify-content: center;
	}

	span {
		padding: 5px 10px;
		transition: 0.4s;
		cursor: pointer;

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

	.first__container span {
		margin-right: 20px;
		display: inline-block;
		padding: 5px 10px;
	}
`;
