import { getRandomIntNumberBetween } from '@/lib/utils'
import { ProductType } from '@/types'
import { Star } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { CustomCard } from './ui/card'
import { CustomButton } from './ui/button'

import { useDispatch } from 'react-redux'
import { setAddToBasketState } from '@/global-states/features/basket/basket'

const Product = ({
	title,
	image,
	price,
	category,
	description,
	stock,
	id,
	rating = { count: 0, rate: getRandomIntNumberBetween(1, 5) }, // Default rating
}: ProductType) => {
	const dispatch = useDispatch()
	const starRating = rating.rate // Set the starRating value

	const addToBasketHandler = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault()
		const product = {
			id,
			title,
			image,
			rating: { count: rating.count, rate: starRating },
			price,
			category,
			description,
			stock,
		}
		dispatch(setAddToBasketState({ item: product }))
	}

	return (
		<CustomCard className="flex justify-center flex-grow m-2.5 max-w-[1500px]">
			<div className="flex flex-col items-center max-h-[530px] p-5 max-w-[340px] w-full overflow-hidden">
				<div className="w-full flex justify-end text-sm mt-[-10px] mb-5 text-[#007185] hover:text-[#c7511f]">
					{category}
				</div>
				<div className="max-w-[300px] min-w-[300px] sm:max-w-[250px] sm:min-w-[250px] sm:px-2.5">
					<div className="flex justify-center h-[190px]">
						<LazyLoadImage
							effect="blur"
							placeholderSrc="/path/to/placeholder-image.jpg"
							className="block object-contain h-full w-full"
							src={image}
							alt={title}
							height={190}
							width={190}
						/>
					</div>
					<div className="min-h-[130px] max-h-[250px] overflow-hidden pt-3.5 sm:min-h-[190px] sm:max-h-[290px]">
						<p className="text-base w-full font-normal leading-6 overflow-hidden max-h-[100px] h-[50px] text-[#007185] hover:text-[#c45500] sm:px-2">
							{title}
						</p>
						<div className="flex items-center my-3 text-[#f6991e] text-base font-bold sm:px-2.5">
							{Array(5)
								.fill(0)
								.map((_, index) => (
									<Star
										key={index}
										className={`w-5 h-5 ${
											index < starRating ? 'fill-[#FCDE42]' : 'fill-none'
										}`}
									/>
								))}
							<p className="font-bold text-[#007185]">
								<span className="mx-2.5 bg-[#dbeafe]">
									{starRating.toFixed(1)}
								</span>
								{getRandomIntNumberBetween(1000, 7000)}
							</p>
						</div>
						<p className="text-sm max-h-[50px] overflow-hidden text-[#007185] hover:text-[#c45500] sm:px-2.5 truncate">
							{description}
						</p>
						<p className="my-2.5 text-[#007185] sm:px-2.5">
							<strong>${price}</strong>
							<span className="pl-2 font-semibold">Save 5%</span>
						</p>
						<p className="text-sm text-[#c45500] sm:px-2.5 sm:max-h-[20px] sm:overflow-hidden">
							{stock ? `${stock} in stock` : 'Out of stock'}
						</p>
					</div>

					<CustomButton onClick={addToBasketHandler} aria-label="Add to Basket">
						Add to Basket
					</CustomButton>
				</div>
			</div>
		</CustomCard>
	)
}

export default Product
