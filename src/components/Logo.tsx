import { Link } from 'react-router'

export default function Logo() {
	return (
		<Link to="/">
			<div className="flex items-center w-100px] min-w-[100px]   mr-5 ml-3.5   md:h-[60px] hover:border hover:border-white hover:shadow-lg transition-all px-4 py-3">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon-logo"
					className="w-full h-full object-contain mt-3.5"
				/>
			</div>
		</Link>
	)
}
