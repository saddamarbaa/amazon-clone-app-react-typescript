import { auth } from '@/config'
import { selectBasket } from '@/global-states/features/basket/basket'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'
import { v4 as uuidv4 } from 'uuid'

const Order = () => {
	const basket = useSelector(selectBasket)
	const [user] = useAuthState(auth)

	return (
		<div className="flex flex-col bg-white  mx-auto mt-12 p-5 w-full max-w-6xl">
			<h3 className="text-[#f08804] text-xl border-none p-2.5 mr-2.5">
				Hello{' '}
				{user?.displayName ? user.displayName : user?.email ? user.email : ''}
			</h3>
			{basket?.length ? (
				<h2 className="p-2.5 mr-2.5 border-b border-light-gray">Your Orders</h2>
			) : (
				<h2 className="p-2.5 mr-2.5 border-b border-light-gray font-bold text-2xl">
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
	)
}

export default Order
