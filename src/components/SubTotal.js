/** @format */

import styled from "styled-components";
import React, { memo, useEffect } from "react";
import NumberFormat from "react-number-format";

import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

const SubTotal = () => {
	const basket = useSelector(selectBasket);

	const getTotalPrice = () => {
		let totalPrice = 0;
		basket.map((item) => {
			totalPrice += item.price;
			console.log(totalPrice);
		});
		return totalPrice;
	};

	return (
		<CartTotal>
			<h3>
				Subtotal({basket?.length} items):
				<span className='cartTotal-price'>
					<NumberFormat
						value={getTotalPrice()}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
						decimalScale={2}
					/>
				</span>
			</h3>
			<p className='subtotal__gift'>
				<input type='checkbox' checked /> This order contains a gifts
			</p>
			<button>Proceed to checkout</button>
		</CartTotal>
	);
};

export default memo(SubTotal);

const CartTotal = styled.div`
	height: 100%;
	min-width: 100%;

	.cartTotal-price {
		margin-left: 8px;
		margin-left: 16px;
	}

	.subtotal__gift {
		margin: 20px 0;
		display: block;
		z-index: 12;
		cursor: pointer;
		font-size: 0.9rem;
	}

	input {
		margin-right: 5px;
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

		@media (max-width: 992px) {
			margin-left: 0px;
		}
	}

	@media (min-width: 992px) {
		background-color: white;
		flex: 0.3;
		padding: 20px;
		min-width: 300px;
		margin-top: 0;

		h3 {
			margin-left: 0;
		}

		.cartTotal-price {
			margin-left: 8px;
		}

		button {
			margin-left: 0;
			text-align: center;
			width: 100%;
		}
	}
`;
