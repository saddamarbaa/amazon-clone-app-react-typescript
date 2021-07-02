/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectBasket } from "../features/basket/basketSlice";

const Order = () => {
	const basket = useSelector(selectBasket);
	const user = useSelector(selectUser);

	return (
		<OrderPageWrapper>
			<h3 className='checkout__title greeting'>
				Hello{" "}
				{user?.displayName
					? user.displayName
					: user?.email
					? user.email
					: ""}
			</h3>

			{basket?.length ? (
				<h2 className='checkout__title'>Your Orders</h2>
			) : (
				<h2 className='checkout__title'>Your Amazon Cart is empty</h2>
			)}

			{basket?.map(
				({ id, title, image, price, category, description, stock }) => {
					return (
						<CartItem
							key={uuidv4()}
							id={id}
							title={title}
							image={image}
							price={price}
							category={category}
							description={description}
							stock={stock}
						/>
					);
				},
			)}
		</OrderPageWrapper>
	);
};

export default memo(Order);

const OrderPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	max-width: 1000px;
	background-color: white;
	padding: 20px;
	margin: 0 auto;

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

	.checkout__title.greeting {
		border-bottom: none;
		color: #f08804;
		font-size: 20px;
	}
`;
