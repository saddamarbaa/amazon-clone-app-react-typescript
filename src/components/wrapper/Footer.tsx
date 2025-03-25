import { Globe } from 'lucide-react'
import { memo, useState, useEffect } from 'react'
import Logo from '../Logo'

const footerLinks = [
	{
		title: 'Get to Know Us',
		links: [
			'Careers',
			'Blog',
			'About Amazon',
			'Investor Relations',
			'Amazon Devices',
		],
	},
	{
		title: 'Make Money with Us',
		links: [
			'Sell products on Amazon',
			'Sell on Amazon Business',
			'Sell apps on Amazon',
			'Become an Affiliate',
			'Advertise Your Products',
			'Self-Publish with Us',
			'Host an Amazon Hub',
			'See More Make Money with Us',
		],
	},
	{
		title: 'Amazon Payment Products',
		links: [
			'Amazon Business Card',
			'Shop with Points',
			'Reload Your Balance',
			'Amazon Currency Converter',
		],
	},
	{
		title: 'Let Us Help You',
		links: [
			'Amazon and COVID-19',
			'Your Account',
			'Your Orders',
			'Shipping Rates & Policies',
			'Returns & Replacements',
			'Manage Your Content and Devices',
			'Amazon Assistant',
			'Help',
		],
	},
]

const amazonServices = [
	{ title: 'Amazon Music', description: 'Stream millions of songs' },
	{
		title: 'Amazon Advertising',
		description: 'Find, attract, and engage customers',
	},
	{ title: 'Amazon Drive', description: 'Cloud storage from Amazon' },
	{ title: '6pm', description: 'Score deals on fashion brands' },
	{ title: 'AbeBooks', description: 'Books, art & collectibles' },
	{ title: 'ACX', description: 'Audiobook Publishing Made Easy' },
	{
		title: 'Amazon Web Services',
		description: 'Scalable Cloud Computing Services',
	},
	{ title: 'Audible', description: 'Download Audio Books' },
	{ title: 'DPReview', description: 'Digital Photography' },
	{ title: 'IMDb', description: 'Movies, TV & Celebrities' },
	{ title: 'Shopbop', description: 'Designer Fashion Brands' },
	{ title: 'Amazon Business', description: 'Everything For Your Business' },
	{ title: 'Prime Now', description: '2-Hour Delivery on Everyday Items' },
	{
		title: 'Amazon Prime',
		description: 'Exclusive savings for Prime members',
	},
	{
		title: 'Amazon Fresh',
		description: 'Groceries & More Right To Your Door',
	},
	{ title: 'AmazonGlobal', description: 'Ship Orders Internationally' },
	{
		title: 'Home Services',
		description: 'Experienced Pros Happiness Guarantee',
	},
	{
		title: 'Amazon Ignite',
		description: 'Sell your original educational resources',
	},
	{ title: 'Amazon Rapids', description: 'Fun stories for kids' },
	{
		title: 'Amazon Restaurants',
		description: 'Food delivery from local restaurants',
	},
	{ title: 'Amazon Video', description: 'Watch movies, TV shows, and more' },
	{ title: 'Amazon Photos', description: 'Unlimited photo storage' },
	{
		title: 'Amazon Handmade',
		description: 'Handmade products from artisans',
	},
	{
		title: 'Amazon Launchpad',
		description: 'Discover new products from startups',
	},
	{
		title: 'Amazon Subscription Boxes',
		description: 'Top subscription boxes – right to your door',
	},
]

const Footer = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		setIsVisible(scrolled > 300)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible)
		return () => window.removeEventListener('scroll', toggleVisible)
	}, [])

	return (
		<>
			{/* Scroll to Top Button */}
			<div
				className={`border-b border-gray-700 p-4 bg-gray-900 dark:bg-gray-800 text-center text-white hover:bg-gray-600 transition duration-150 ${
					isVisible ? 'block' : 'hidden'
				}`}>
				<button
					onClick={scrollToTop}
					aria-label="Back to top"
					className="cursor-pointer">
					Back to top
				</button>
			</div>

			{/* Footer Content */}
			<div className="w-full bg-gray-800 dark:bg-gray-900 text-white font-ember">
				{/* First Footer Section */}
				<div className="py-8 border-b border-gray-700">
					<div className="container mx-auto px-4 flex flex-wrap justify-between">
						{footerLinks.map((section, index) => (
							<div key={index} className="w-full md:w-1/4 lg:w-1/5 mb-8">
								<h2 className="text-sm font-bold mb-4">{section.title}</h2>
								{section.links.map((link, idx) => (
									<a
										key={idx}
										href="#"
										className="block text-gray-400 hover:text-white text-sm mb-2">
										{link}
									</a>
								))}
							</div>
						))}
					</div>
				</div>

				{/* Middle Footer Section */}
				<div className="py-8 bg-gray-900 dark:bg-gray-800">
					<div className="container mx-auto px-4 flex flex-wrap items-center justify-center">
						<Logo />

						<div className="flex flex-wrap justify-between items-center">
							<div className="flex items-center p-3 border border-gray-500 rounded-lg m-2 hover:bg-gray-700 transition duration-150">
								<Globe className="mr-2" />
								<span>English</span>
							</div>
							<div className="flex items-center p-3 border border-gray-500 rounded-lg m-2 hover:bg-gray-700 transition duration-150">
								$ USD-U.S Dollar
							</div>
							<div className="flex items-center p-3 border border-gray-500 rounded-lg m-2 hover:bg-gray-700 transition duration-150">
								<img
									className="w-6 h-4 mr-2"
									src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
									alt="usa lag"
								/>
								<span>United States</span>
							</div>
						</div>
					</div>
				</div>

				{/* Second Footer Section */}
				<div className="py-8 bg-gray-800 dark:bg-gray-700">
					<div className="container mx-auto px-4 flex flex-wrap justify-between">
						{amazonServices.map((service, index) => (
							<div key={index} className="w-1/6 mb-8">
								<h2 className="text-xs font-bold mb-2">{service.title}</h2>
								<a
									href="#"
									className="block text-gray-400 hover:text-white text-xs">
									{service.description}
								</a>
							</div>
						))}
					</div>
				</div>

				{/* Conditions of Use */}
				<div className="py-8 bg-gray-900 dark:bg-gray-800">
					<div className="container mx-auto px-4 flex flex-wrap justify-center">
						<a href="#" className="text-gray-400 hover:text-white text-xs mx-2">
							Conditions of Use
						</a>
						<a href="#" className="text-gray-400 hover:text-white text-xs mx-2">
							Privacy Notice
						</a>
						<a href="#" className="text-gray-400 hover:text-white text-xs mx-2">
							Interest-Based Ads
						</a>
						<a href="#" className="text-gray-400 text-xs mx-2">
							&copy; 1996-2021, Amazon.com, Inc. or its affiliates
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default memo(Footer)
