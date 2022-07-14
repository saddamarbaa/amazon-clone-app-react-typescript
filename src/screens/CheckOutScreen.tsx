import React from 'react'

import Checkout from '../components/CheckoutProduct'
import LayoutHigherOrderComponent from '../layouts/index'

function CheckOutScreen() {
	return (
		<LayoutHigherOrderComponent>
			<Checkout />
		</LayoutHigherOrderComponent>
	)
}

export default CheckOutScreen
