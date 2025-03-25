const ShimmerHeader = () => {
	return (
		<header className="w-full sticky top-0 z-50 bg-gray-400 shadow-md">
			<div className="h-[70px] flex items-center px-6 justify-between">
				{/* Left Section: Logo and Search Bar */}
				<div className="flex items-center flex-1 space-x-6">
					{/* Logo Shimmer */}
					<div className="w-32 h-10 bg-gray-700 animate-pulse rounded-md" />

					{/* Search Bar Shimmer */}
					<div className="hidden md:flex items-center flex-1 min-w-[250px] md:min-w-[350px] rounded-md">
						<div className="w-full h-[38px] rounded-l-md animate-pulse bg-gray-200"></div>
						<div className="h-[38px] w-12 rounded-r-md ml-4 animate-pulse bg-gray-200 mr-3"></div>
					</div>
				</div>

				{/* Right Section: Navigation Options */}
				<div className="flex items-center space-x-4">
					{/* Mode Toggle Shimmer */}
					<div className="w-10 h-10 bg-gray-700 animate-pulse rounded-full" />

					{/* Country Selector Shimmer */}
					<div className="w-16 h-10 bg-gray-700 animate-pulse rounded-md" />

					{/* Delivery Location Shimmer */}
					<div className="hidden lg:flex w-24 h-10 bg-gray-700 animate-pulse rounded-md" />

					{/* User Sign-In/Sign-Out Shimmer */}
					<div className="hidden lg:flex w-24 h-10 bg-gray-700 animate-pulse rounded-md" />

					{/* Returns & Orders Shimmer */}
					<div className="hidden lg:flex w-24 h-10 bg-gray-700 animate-pulse rounded-md" />

					{/* Prime Shimmer */}
					<div className="hidden lg:flex w-24 h-10 bg-gray-700 animate-pulse rounded-md" />

					{/* Basket Shimmer */}
					<div className="w-10 h-10 bg-gray-700 animate-pulse rounded-full" />
				</div>
			</div>
		</header>
	)
}

export default ShimmerHeader
