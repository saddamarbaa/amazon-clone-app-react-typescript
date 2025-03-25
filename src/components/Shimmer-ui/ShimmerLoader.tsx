import Spinner from '../Spinner'
import ShimmerHeader from './ShimmerHeader'
import ShimmerProduct from './ShimmerProduct'

const ShimmerLayout = () => {
	const loadingItems = Array(16).fill(null)

	return (
		<div className="dark:text-white text-gray-900 bg-white min-h-screen flex flex-col">
			<ShimmerHeader />

			{/* Shimmer Main Content */}
			<div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  grid p-5">
				{loadingItems.map((_, index) => (
					<ShimmerProduct
						key={index}
						showImage={index === 2 || index === 5 || index == 7}
					/>
				))}
			</div>

			<Spinner />

			{/* Shimmer Footer */}
		</div>
	)
}

export default ShimmerLayout
