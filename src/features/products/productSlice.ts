import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../types'
import {
	allProductMockData,
	electronicProductMockData,
	generalProductMockData,
} from '../../data/Data'

interface ProductState {
	allProducts: ProductType[]
	electronicProducts: ProductType[]
	generalProducts: ProductType[]
}

const initialState: ProductState = {
	allProducts: allProductMockData,
	electronicProducts: electronicProductMockData,
	generalProducts: generalProductMockData,
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// Action to filter products based on the search query
		filterProducts: (state, action: PayloadAction<string>) => {
			const searchQuery = action.payload.toLowerCase()
			if (searchQuery) {
				// Filter all products based on search query
				state.allProducts = allProductMockData.filter(
					(product) =>
						product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						product.description
							.toLowerCase()
							.includes(searchQuery.toLowerCase()),
				)

				// Filter electronic products based on search query
				state.electronicProducts = electronicProductMockData.filter(
					(product) =>
						product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						product.description.toLowerCase().includes(searchQuery.toLowerCase()),
				)

				// Filter general products based on search query
				state.generalProducts = generalProductMockData.filter(
					(product) =>
						product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						product.description.toLowerCase().includes(searchQuery.toLowerCase()),
				)
			} else {
				state.allProducts = allProductMockData
				state.electronicProducts = electronicProductMockData
				state.generalProducts = generalProductMockData
			}
		},
	},
})

export const { filterProducts } = productSlice.actions

// Selectors
export const selectAllProducts = (state: { product: ProductState }) =>
	state.product

export default productSlice.reducer
