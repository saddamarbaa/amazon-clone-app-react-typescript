/** @format */

import React, { useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectBasket } from "../features/basket/basketSlice";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Payment = () => {
	const basket = useSelector(selectBasket);
	const user = useSelector(selectUser);
	const [totalPrice, setTotalPrice] = useState(0);

	const getTotalPrice = () => {
		let initialValue = 0;
		const totalProductPrice = basket?.reduce(
			(accumulator, currentItemValue) =>
				currentItemValue.price + accumulator,
			initialValue,
		);
		setTotalPrice(totalProductPrice);
		return totalProductPrice;
	};

	useEffect(() => {
		setTotalPrice(getTotalPrice());
	}, [basket]);

	return (
		<PaymentWrapper>
			<div className='payment__container'>
				<div className='checkout-container'>
					<h1>
						Ckeckout(
						<Link to='/CheckoutProduct'> {basket?.length} items</Link>)
					</h1>
				</div>

				{/* Payment Section - Delivery address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>

					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>From Amazon shopping 123 California USA</p>
					</div>
				</div>

				{/* Payment Section - Review Items */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
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
					</div>
				</div>

				{/* Payment section - payment method */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						{/* Stripe Magic will go here */}
						<p>
							Visa Card or Master Card{" "}
							<span>
								(Total Payment :{" "}
								<NumberFormat
									value={totalPrice}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
									decimalScale={2}
								/>
								)
							</span>
						</p>
					</div>
				</div>
			</div>
		</PaymentWrapper>
	);
};

export default memo(Payment);

const PaymentWrapper = styled.div`
	height: auto;
	background: white !important;

	.payment__container .checkout-container {
		background: rgb(234, 234, 237);
		width: 100%;
	}

	.payment__container h1 {
		text-align: center;
		padding: 20px;
		font-weight: 400;
		border-bottom: 1px solid lightgray;
		max-width: 1500px;

		@media (max-width: 400px) {
			text-align: left;
		}
	}

	.payment__container h1 a {
		text-decoration: none;
	}

	.payment__section {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		padding-left: 0;
		margin: 0 20px;
		border-bottom: 1px solid lightgray;
	}

	.payment__title {
		min-width: 300px;
		width: 300px;

		@media (max-width: 500px) {
			margin-bottom: 10px;
		}
	}

	.payment__address {
		flex: 1;
		border-bottom: none;
		color: #f08804;
		font-size: 20px;
	}

	.payment__items {
		flex: 1;
	}

	.payment__details {
		display: flex;
		align-items: center;

		p {
			font-size: 20px;

			span {
				color: #f08804;
			}
		}
	}
`;
