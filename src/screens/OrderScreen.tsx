import React from 'react'

import Order from '../components/Order'
import LayoutHigherOrderComponent from '../layouts/index'

function OrderScreen() {
	return (
		<LayoutHigherOrderComponent>
			<Order />
		</LayoutHigherOrderComponent>
	)
}

export default OrderScreen
