import React from 'react'

import Home from '../components/Home'
import LayoutHigherOrderComponent from '../layouts/index'

function HomeScreen() {
	return (
		<LayoutHigherOrderComponent>
			<Home />
		</LayoutHigherOrderComponent>
	)
}

export default HomeScreen
