import { useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { selectBasket } from '@/global-states/features/basket/basket'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config'
import CartItem from '../CartItem'
import SubTotal from './ SubTotal'
import Banner from '../Banner'

const Checkout = () => {
	const basket = useSelector(selectBasket)
	const [user] = useAuthState(auth)
	const autoScrollToBottomRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: 'smooth',
		})
	}, [])

	return (
		<section className="w-full flex flex-col items-center max-w-[1500px] mx-auto">
			<Banner />

			<div className="w-full flex justify-between px-5 py-6  mx-auto space-x-6 md:flex-row flex-col">
				{/* Empty div for auto scroll */}
				<div
					ref={autoScrollToBottomRef}
					className="absolute -top-[100px] pt-28 auto-scroll"></div>

				{/* Left Section */}
				<div className="flex flex-col bg-white flex-grow p-5 md:mr-4 space-y-4">
					<h3 className="text-2xl text-[#f08804] mb-4">
						Hello{' '}
						{user?.displayName
							? user.displayName
							: user?.email
							? user.email
							: ''}
					</h3>

					{basket?.length ? (
						<h2 className="border-b pb-4 text-2xl font-semibold">
							Your Shopping Basket
						</h2>
					) : (
						<h2 className="border-b pb-4 text-2xl font-semibold">
							Your Amazon Cart is empty
						</h2>
					)}

					{basket?.map(
						({
							id,
							title,
							image,
							price,
							category,
							description,
							stock,
							quantity,
						}) => {
							return (
								<CartItem
									key={uuidv4()}
									id={id}
									title={title}
									image={image}
									price={price}
									category={category}
									description={description}
									stock={stock}
									quantity={quantity}
								/>
							)
						},
					)}
				</div>

				{/* Right Section */}
				<div className="bg-white w-full md:w-[300px] p-5 min-w-[300px]">
					<SubTotal />
				</div>
			</div>
		</section>
	)
}

export default Checkout
