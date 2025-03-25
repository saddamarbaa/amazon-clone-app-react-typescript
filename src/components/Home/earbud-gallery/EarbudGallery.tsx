import useEarbudGallery from './useEarbudGallery'
import { Button } from '../../ui/button'

import { allProductMockData } from '@/lib/Data'
import Product from '@/components/Product'
import ProductCard from '@/components/ProductCard'

const EarbudGallery = () => {
	const { products } = useEarbudGallery()

	return (
		<div className="relative p-4   mt-14">
			{/* Red background div behind */}
			<div
				className="w-full bg-cover bg-center bg-no-repeat absolute top-0 left-0  h-full  -z-10"
				style={{
					backgroundImage: `url('https://static.priceoye.pk/images/categories/section-earbuds-bg-md.png')`,
					height: '450px',
				}}></div>

			<div className="w-full flex flex-col items-center max-w-[1500px] mx-auto">
				{/* Header with title and button */}
				<div className="w-[95%] flex items-center justify-between pt-5  pb-8">
					<h2 className="text-white text-lg lg:text-xl font-bold">
						Latest Wireless Earbuds
					</h2>
					<Button className="text-black bg-white hover:text-slate-300 capitalize">
						View all
					</Button>
				</div>

				<div className="w-[95%] flex flex-row justify-center items-center flex-wrap box-border  gap-6">
					{allProductMockData?.map(
						({ id, title, image, price, category, description, stock }) => (
							<Product
								key={id}
								id={id}
								title={title}
								image={'/items/' + image}
								price={price}
								stock={stock}
								category={category}
								description={description}
							/>
						),
					)}
				</div>

				{/* Product List */}
				<div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-6">
					{products.map((item) => (
						<ProductCard
							key={item.id}
							product={{
								id: item.id,
								name: item.name,
								image: item.image,
								rating: item.rating,
								reviews: item.reviews_count,
								price: item.current_price,
								originalPrice: item.original_price,
								discount: item.discount,
							}}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default EarbudGallery
