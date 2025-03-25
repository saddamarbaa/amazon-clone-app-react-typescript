import { Star } from 'lucide-react'
import useBestSellers from './useBestSellers'
import { CustomCard } from '../../ui/card'
import Banner from '@/components/Banner'
// import imageURL from '@/assets/sale-campaign-banner.gif'
import imageURL from '@/assets/hero-8.jpg'

// Define the Product interface
interface Product {
	id: string | number
	name: string
	image: string
	rating: number
	reviews: number
	price: string
	originalPrice: string
	discount: number
}

// Reusable ProductCard Component
interface ProductCardProps {
	product: Product
}

const ProductCard1: React.FC<ProductCardProps> = ({ product }) => {
	const { name, image, rating, reviews, price, originalPrice, discount } =
		product

	return (
		<CustomCard className="w-full h-fit py-7 px-5 cursor-pointer">
			<div className="flex justify-between">
				<h4 className="text-sm font-semibold text-gray-900">{name}</h4>
				<div className="flex justify-center">
					<img
						className="object-cover w-40"
						src={image}
						alt={name}
						loading="lazy"
					/>
				</div>
			</div>
			<div className="flex items-center bg-[#faf4e3] mb-6 md:ml-20 lg:ml-32 -mt-3 px-2 rounded-full w-32">
				<p className="text-sm text-gray-900">
					<Star className="text-[#FFC61C]" aria-label="Rating" /> {rating}
				</p>
				<p className="text-[11px] pl-2 text-gray-700">{reviews} Reviews</p>
			</div>
			<p className="text-sm text-gray-900">
				<span className="text-xs relative -top-2">Rs</span> {price}
			</p>
			<div className="flex justify-between items-center">
				<p className="text-xs line-through decoration-red-500 text-slate-400">
					<span className="text-xs relative -top-1">Rs</span> {originalPrice}
				</p>
				<p className="font-normal text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
					{discount}% OFF
				</p>
			</div>
		</CustomCard>
	)
}

// Reusable FeaturedProduct Component
interface FeaturedProductProps {
	product: Product
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => (
	<div className="bg-white w-full lg:w-[40%] py-7 px-5 rounded-md cursor-pointer text-gray-900">
		<h3 className="text-sm font-semibold">{product.name}</h3>
		<div className="flex justify-center">
			<img
				className="object-cover w-96 mt-7"
				src={product.image}
				alt={product.name}
				loading="lazy"
			/>
		</div>
		<div className="flex items-center bg-[#faf4e3] mb-6 lg:ml-28 -mt-3 px-2 rounded-full w-32">
			<p className="text-sm">
				<Star className="text-[#FFC61C]" aria-label="Rating" /> {product.rating}
			</p>
			<p className="text-[11px] pl-2">{product.reviews} Reviews</p>
		</div>
		<p className="text-sm">
			<span className="text-xs relative -top-2">Rs</span> {product.price}
		</p>
		<div className="flex justify-between items-center">
			<p className="text-xs line-through decoration-red-500 text-slate-400">
				<span className="text-xs relative -top-1">Rs</span>{' '}
				{product.originalPrice}
			</p>
			<p className="font-normal text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
				{product.discount}% OFF
			</p>
		</div>
	</div>
)

// Main Component
export const BestSellers: React.FC = () => {
	const { products } = useBestSellers()

	// Avoid recomputation of sliced arrays
	const firstTwoProducts = products.slice(1, 3)
	const remainingProducts = products.slice(3)

	return (
		<>
			<section className="w-full flex flex-col items-center max-w-[1500px] mx-auto">
				<Banner />

				<div className="w-[95%] flex flex-col lg:flex-row justify-between gap-4">
					{/* Featured Product */}
					{products.length > 0 && <FeaturedProduct product={products[0]} />}

					{/* Product Grid */}
					<div className="lg:w-[60%]">
						<div className="flex flex-col md:flex-row gap-4">
							{firstTwoProducts.map((product) => (
								<ProductCard1 key={product.id} product={product} />
							))}
						</div>
						<div className="flex flex-col md:flex-row gap-4 mt-4">
							{remainingProducts.map((product) => (
								<ProductCard1 key={product.id} product={product} />
							))}
						</div>
					</div>
				</div>

				<div className="w-[95%] flex  flex-col justify-between gap-4 ">
					<div className="mt-14">
						<img
							className="object-cover w-full"
							src={imageURL}
							alt="Sale campaign banner"
						/>
					</div>
				</div>
			</section>

			{/* Bottom Banner */}
			<div className="mt-14">
				<img
					className="object-cover w-full"
					src={
						'https://static.priceoye.pk/images/bnpl_banner/static-banner-bnpl-v4.jpg'
					}
					alt="Buy Now Pay Later Banner"
				/>
			</div>
		</>
	)
}

export default BestSellers
