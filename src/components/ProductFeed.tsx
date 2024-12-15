
import styled from 'styled-components'
import Product from './Product'
import { ProductType } from '../types'

const ProductFeed = ({ products }: { products: ProductType[] }) => {
	

	return (
		<GridContainer>
			{products?.map(
				({ id, title, image, price, category, description, stock }) => {
					return (
						<Product
							key={id}
							id={id}
							title={title}
							image={image}
							price={price}
							category={category}
							description={description}
							stock={stock}
						/>
					)
				},
			)}
		</GridContainer>
	)
}

export default ProductFeed

const GridContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	box-sizing: border-box;
`
