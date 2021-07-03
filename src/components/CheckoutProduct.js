/** @format */

import React, { memo } from "react";
import styled from "styled-components";
import SubTotal from "./SubTotal";
import Banner from "./Banner";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectBasket } from "../features/basket/basketSlice";
const CheckoutProduct = () => {
	const basket = useSelector(selectBasket);
	const user = useSelector(selectUser);

	return (
		<Wrapper>
			<Banner />
			<TotalCeckOutContainer>
				<CheckOutLeft>
					<h3 className='checkout__title greeting'>
						Hello{" "}
						{user?.displayName
							? user.displayName
							: user?.email
							? user.email
							: ""}
					</h3>

					{basket?.length ? (
						<h2 className='checkout__title'>Your Shopping Basket</h2>
					) : (
						<h2 className='checkout__title'>Your Amazon Cart is empty</h2>
					)}

					{basket?.map(
						({
							id,
							title,
							image,
							price,
							category,
							description,
							stock,
						}) => {
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
				</CheckOutLeft>

				<CheckOutRight>
					<SubTotal />
				</CheckOutRight>
			</TotalCeckOutContainer>
		</Wrapper>
	);
};

export default memo(CheckoutProduct);

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const TotalCeckOutContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 20px;
	height: max-content;
	display: flex;
	justify-content: space-between;
	max-width: 1500px;

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

	.checkout__title.greeting {
		border-bottom: none;
		color: #f08804;
		font-size: 20px;
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
