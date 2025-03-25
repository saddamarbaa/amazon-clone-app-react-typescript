import 'react-responsive-carousel/lib/styles/carousel.min.css'

import useSmartWatchGallery from './useSmartWatchGallery'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'

const SmartWatchGallery = () => {
	const { products } = useSmartWatchGallery()

	return (
		<>
			<div className="relative p-4   mt-14">
				{/* Red background div behind */}
				<div
					className="w-full bg-cover bg-center bg-no-repeat absolute top-0 left-0  h-full  -z-10"
					style={{
						backgroundImage: `url('https://static.priceoye.pk/images/categories/section-smart-watches-bg-md.png')`,
						height: '400px',
					}}></div>

				<div className="w-full flex flex-col items-center max-w-[1500px] mx-auto">
					{/* Header with title and button */}
					<div className="w-[95%] flex items-center justify-between pt-5  pb-8">
						<p className="text-white font-bold text-xl">Latest Smart Watches</p>
						<Button className="text-black bg-white hover:text-slate-300 capitalize">
							View all
						</Button>
					</div>

					{/* Product List */}
					<div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
						{products.map((item) => (
							<ProductCard
								key={item.id}
								product={{
									id: item.id,
									name: item.title,
									image: item.image,
									rating: item.rating,
									reviews: item.reviews,
									price: item.currentPrice,
									originalPrice: item.originalPrice,
									discount: item.discountPercentage,
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default SmartWatchGallery
