import {
	// selectBasket,
	// setAddToBasketState,
	setDecreaseQuantity,
	setIncreaseQuantity,
	setRemoveFromBasketState,
} from '@/global-states/features/basket/basket'
import { truncate } from '@/lib/utils'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { CustomButton } from './ui/button'
import { ProductType } from '@/types'

const CartItem = ({
	id,
	title,
	image,
	price,
	description,
	stock,
	quantity,
}: ProductType & { quantity: number }) => {
	const dispatch = useDispatch()

	// Remove item from basket handler
	const handleRemoveItem = (id: number | string) => {
		dispatch(setRemoveFromBasketState({ id }))
	}

	// Increase item quantity handler
	const handleIncreaseQuantity = (id: number | string) => {
		dispatch(setIncreaseQuantity({ id }))
	}

	// Decrease item quantity handler
	const handleDecreaseQuantity = (id: number | string) => {
		dispatch(setDecreaseQuantity({ id }))
	}

	// Generate star rating UI
	const renderStarRating = (rating: number) => {
		return Array(rating)
			.fill(null)
			.map(() => <span key={uuidv4()}>★</span>)
	}

	return (
		<div className="flex flex-col lg:flex-row items-start border-b border-gray-200 py-6 px-3 bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-sm rounded-lg">
			{/* Product Image */}
			<div className="flex-shrink-0 pb-3 pr-4 w-full lg:w-48">
				<LazyLoadImage
					effect="blur"
					placeholderSrc="https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
					src={image}
					alt={`${title} product image`}
					className="h-48 w-48 object-contain"
					role="img"
					aria-label={title}
				/>
			</div>

			{/* Product Info */}
			<div className="flex-grow lg:flex lg:justify-between lg:items-start w-full">
				<div className="space-y-2 lg:w-2/3">
					{/* Title */}
					<h2 className="m-0 text-lg font-semibold text-[#007185] hover:text-[#c45500] cursor-pointer">
						{title}
					</h2>

					{/* Description */}
					<p className="text-sm text-gray-600">{truncate(description, 260)}</p>

					{/* Stock Info */}
					<p className="mt-1 text-[#007600] font-semibold">
						{stock ? stock : 'In Stock'}
					</p>

					{/* Star Rating */}
					<div className="my-2 text-[#f6991e] font-bold flex">
						{renderStarRating(5)} {/* Static rating for now */}
					</div>

					{/* Quantity Adjusters */}
					<div className="flex items-center space-x-2 mt-2 w-fit">
						<CustomButton
							className="px-3 py-1 border border-gray-400 rounded-md text-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c45500]"
							onClick={() => handleDecreaseQuantity(id)}
							aria-label="Decrease quantity">
							–
						</CustomButton>
						<span className="text-sm font-bold px-3">{quantity}</span>
						<CustomButton
							className=" border border-gray-400 rounded-md text-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c45500]"
							onClick={() => handleIncreaseQuantity(id)}
							aria-label="Increase quantity">
							+
						</CustomButton>
					</div>
				</div>

				{/* Product Price and Remove Button */}
				<div className="lg:text-right lg:ml-4 lg:mt-0 mt-6 w-full lg:w-auto">
					{/* Total Price */}
					<p className="text-lg font-bold mb-3">
						${(price * quantity).toFixed(2)} {/* Total price for the item */}
					</p>

					{/* Remove Button */}
					<CustomButton
						onClick={() => handleRemoveItem(id)}
						className="px-4 py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
						aria-label={`Remove ${title} from basket`}>
						Remove
					</CustomButton>
				</div>
			</div>
		</div>
	)
}

export default CartItem
