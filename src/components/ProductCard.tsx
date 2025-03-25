import { Star } from 'lucide-react'
import { CustomCard } from './ui/card'
import { CustomButton } from './ui/button'
import { useDispatch } from 'react-redux'
import { setAddToBasketState } from '@/global-states/features/basket/basket'

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { name, image, rating, reviews, price, originalPrice, discount, id } =
		product

	const dispatch = useDispatch()

	const addToBasketHandler = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault()
		const priceNumber = Number(price.replace(/,/g, '')) // Replace commas and convert to number
		console.log(priceNumber) // 15799

		const productToAdd = {
			id: id as number,
			title: name,
			price: priceNumber,
			description: '',
			category: '',
			image,
			rating: {
				rate: 5,
				count: 120,
			},
		}
		dispatch(setAddToBasketState({ item: productToAdd }))
	}

	return (
		<CustomCard
			key={id}
			className="bg-white rounded-lg p-5 cursor-pointer shadow-md flex flex-col items-center">
			<div className="text-center">
				<img className="w-28 h-28 object-contain" src={image} alt={name} />
				<div className="flex items-center bg-[#FBF7EB] px-2 rounded-full mt-2">
					<Star className="w-4 h-4 text-[#FCDE42]" />
					<span className="text-sm ml-1">{rating}</span>
					<span className="text-[11px] ml-2">{reviews} Reviews</span>
				</div>
			</div>

			<div className="flex flex-col items-start gap-3 mt-4 w-full">
				<h3 className="text-[15px] font-medium truncate">
					{name.length > 20 ? `${name.substring(0, 50)}...` : name}
				</h3>

				<div className="flex gap-1">
					<span className="text-sm font-medium relative -top-1">Rs</span>
					<span className="font-semibold text-xl lining-nums">{price}</span>
				</div>

				<div className="flex justify-between items-center w-full">
					<div className="flex gap-1 line-through decoration-red-500 text-slate-400">
						<span className="text-xs font-medium relative -top-1">Rs</span>
						<span className="font-medium text-sm lining-nums">
							{originalPrice}
						</span>
					</div>
					<span className="font-normal text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-2">
						{discount}% OFF
					</span>
				</div>

				<div className="w-full px-12">
					<CustomButton onClick={addToBasketHandler}>Add to Cart</CustomButton>
				</div>
			</div>
		</CustomCard>
	)
}

export default ProductCard
