import { selectBasket } from '@/global-states/features/basket/basket'
import { useSelector } from 'react-redux'
import { CustomButton } from '../ui/button'
import { Link } from 'react-router'

const SubTotal = () => {
	const basket = useSelector(selectBasket)
	const totalProductPrice = basket?.reduce(
		(
			accumulator: number,
			currentItemValue: { price: number; quantity: number },
		) => accumulator + currentItemValue.price * currentItemValue.quantity,
		0,
	)

	return (
		<div className="flex flex-col bg-white p-5 rounded-lg shadow-md text-black">
			<h3 className="text-lg font-medium">
				Subtotal ({basket?.length} items):
				<span className="ml-2">Rs. {totalProductPrice.toFixed(2)}</span>
			</h3>
			<p className="my-5 text-sm cursor-pointer">
				<input type="checkbox" className="mr-2" /> This order contains a gift
			</p>
			<Link to={'/Payment'}>
				<CustomButton>Proceed to checkout</CustomButton>
			</Link>
		</div>
	)
}

export default SubTotal
