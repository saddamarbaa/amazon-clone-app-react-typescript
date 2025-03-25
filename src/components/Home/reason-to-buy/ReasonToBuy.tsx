import { Button } from '@/components/ui/button'
import useReasonToBuy from './useReasonToBuy'

const ReasonToBuy = () => {
	const { reasonToBuy } = useReasonToBuy()

	return (
		<div className="container mx-auto px-3 md:px-8 mt-14">
			<h2 className="text-xl pb-5  font-bold">Reason to Buy</h2>
			<div className="flex justify-between items-center flex-wrap gap-5">
				{reasonToBuy.map((item) => (
					<div
						key={item.id}
						className="bg-[#0279D6] w-full md:w-[49%] rounded-xl h-48 lg:h-52 flex p-4 justify-between lg:px-12 items-center">
						<div className="w-1/2 flex justify-center">
							<img className="w-32 lg:w-52" src={item.image} alt={item.title} />
						</div>
						<div className="text-center w-1/2">
							<h3 className="text-xl md:text-2xl lg:text-[27px] text-white">
								{item.title}
							</h3>
							<p className="text-xl md:text-2xl lg:text-[27px] text-white">
								{item.description}
							</p>
							<Button className="bg-[#F88B2A] text-white mt-3 rounded-lg capitalize cursor-pointer">
								{item.button}
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ReasonToBuy
