import useCategory from './useCategory'

const CategoryBar = () => {
	const { product } = useCategory()

	return (
		<div className=" bg-slate-100 ">
			<div className="py-3 bg-white text-black">
				<div className="container mx-auto overflow-x-auto scrollbar-hide">
					<div className="flex space-x-4 justify-between">
						{product.map((item) => (
							<div
								key={item.id}
								className="flex flex-col justify-center items-center min-w-[100px]">
								<img
									className="object-contain w-12 h-12"
									src={item.image}
									// alt={item.text}
								/>
								<p className="text-sm text-center mt-2">{item.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryBar
