import { memo, useState } from 'react'
import { Menu, X, UserCircle } from 'lucide-react'

const Advertisement = () => {
	const [burgerMenuStatus, setBurgerMenuStatus] = useState(false)

	const toggleBurgerMenu = () => {
		setBurgerMenuStatus((prev) => !prev)
	}

	const menuSections = [
		{
			title: 'Digital Content & Devices',
			items: [
				'Amazon Music',
				'Kindle E-readers & Books',
				'Appstore for Android',
			],
		},
		{
			title: 'Shop By Department',
			items: ['Electronics', 'Computers', 'Smart Home', 'Arts & Crafts'],
		},
		{
			title: 'Programs & Features',
			items: ['Gift Cards', 'Amazon Live', 'International Shopping'],
		},
		{
			title: 'Help & Settings',
			items: ['Your Account', 'English - EN', 'Customs Services'],
		},
	]

	return (
		<div className="w-full bg-[#232f3e] dark:bg-gray-900 text-white dark:text-gray-100 flex-1 h-[41px] flex items-center px-5 justify-between text-sm flex-wrap">
			{/* Main Menu (Desktop) */}
			<div className="flex items-center space-x-2 flex-1 justify-between md:justify-start">
				<button
					aria-label="Open menu"
					aria-expanded={burgerMenuStatus}
					className="flex items-center cursor-pointer p-2 hover:border hover:border-white hover:shadow-lg transition-all"
					onClick={toggleBurgerMenu}>
					<Menu className="mr-2" /> All
				</button>
				{[
					"Today's Deals",
					'Customer Service',
					'Registry',
					'Gift Cards',
					'Sell',
				].map((item) => (
					<div
						key={item}
						className="cursor-pointer p-2 hover:border hover:border-white hover:shadow-lg transition-all hidden md:flex">
						{item}
					</div>
				))}
			</div>

			{/* COVID-19 Response */}
			<div className="cursor-pointer p-2 hover:border hover:border-white hover:shadow-lg transition-all">
				Amazon's response to COVID-19
			</div>

			{/* Sidebar (Burger Menu) */}
			<div
				role="navigation"
				className={`fixed top-0 left-0 bottom-0 bg-white dark:bg-gray-800 w-[350px] max-w-full overflow-y-auto transform transition-transform duration-300 ${
					burgerMenuStatus ? 'translate-x-0' : '-translate-x-full'
				}`}>
				{/* Greeting Section */}
				<div className="bg-[#131921] text-white p-4 flex items-center justify-between">
					<div className="flex items-center">
						<UserCircle className="text-white w-6 h-6" />
						<h3 className="ml-2">Hello User</h3>
					</div>
					<button aria-label="Close menu" onClick={toggleBurgerMenu}>
						<X className="text-white w-6 h-6" />
					</button>
				</div>

				{/* Menu Sections */}
				<div className="text-black dark:text-white">
					{menuSections.map((section, index) => (
						<div key={index}>
							<h3 className="p-5 border-b border-gray-200 dark:border-gray-700 font-bold text-[1.1rem]">
								{section.title}
							</h3>
							<div className="p-5 pt-1">
								<ul>
									{section.items.map((item, idx) => (
										<li key={idx} className="py-3">
											<a className="cursor-pointer hover:text-blue-500">
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default memo(Advertisement)
