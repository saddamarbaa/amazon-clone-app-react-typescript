import React, { memo, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import ProductFeed from './ProductFeed'
// import request from '../api/requests'
import Banner from './Banner'
import Product from './Product'

import { selectAllProducts } from '../features/products/productSlice'

const Home = () => {
	const { allProducts, electronicProducts, generalProducts } =
		useSelector(selectAllProducts)

	// console.log(product)
	const autoScrollToBottomRef = useRef<HTMLDivElement | null>(null)

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: 'smooth',
		})
	}, [])

	return (
		<Wrapper>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{
					paddingTop: '7rem',
					position: 'absolute',
					top: '-100px',
				}}
				className="auto-scroll"></div>

			<Banner />
			<GridContainer>
				{allProducts?.map(
					({ id, title, image, price, category, description, stock }) => {
						return (
							<Product
								key={id}
								id={id}
								title={title}
								image={process.env.PUBLIC_URL + '/items/' + image}
								price={price}
								stock={stock}
								category={category}
								description={description}
							/>
						)
					},
				)}
			</GridContainer>

			<ProductFeed products={generalProducts} />
			<ProductFeed products={electronicProducts} />
			{/* <ProductFeed fetchUrl={request.fetchAll} />
			<ProductFeed fetchUrl={request.fetchElectronics} /> */}
		</Wrapper>
	)
}

export default memo(Home)

const Wrapper = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	max-width: 1500px;
	align-items: center;
	max-width: 1500px;
	margin: 0 auto;
`

const GridContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	box-sizing: border-box;
`
