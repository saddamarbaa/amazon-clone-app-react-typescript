import { CustomCard } from '../ui/card'
type Props = {
	showImage?: boolean
}
const ShimmerProduct = ({ showImage }: Props) => {
	return (
		<CustomCard>
			<div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer">
				{showImage ? (
					<img
						className="lg:h-48 md:h-36 w-full object-cover object-center"
						src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
						alt="blog"
					/>
				) : (
					<div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
				)}

				<div className="p-6">
					<h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
					<h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
					<p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
					<p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
					<p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
					<div className="flex items-center flex-wrap">
						<a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
						<span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
					</div>
				</div>
			</div>
		</CustomCard>
	)
}

export default ShimmerProduct
