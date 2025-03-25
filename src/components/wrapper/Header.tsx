import { Search, MapPin, ChevronDown, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'

import Advertisement from '../Advertisement'
import ModeToggle from '../ui/ModeToggle'
import Logo from '../Logo'
import IconButton from '../IconButton'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { auth } from '@/config'
import { useSelector } from 'react-redux'
import { selectBasket } from '@/global-states/features/basket/basket'

const countries = [
	{ name: 'United States', shortName: 'US', flag: '🇺🇸' },
	{ name: 'United Kingdom', shortName: 'UK', flag: '🇬🇧' },
	{ name: 'Canada', shortName: 'CA', flag: '🇨🇦' },
	{ name: 'Australia', shortName: 'AU', flag: '🇦🇺' },
	{ name: 'Germany', shortName: 'DE', flag: '🇩🇪' },
	{ name: 'France', shortName: 'FR', flag: '🇫🇷' },
	{ name: 'Japan', shortName: 'JP', flag: '🇯🇵' },
	{ name: 'China', shortName: 'CN', flag: '🇨🇳' },
	{ name: 'India', shortName: 'IN', flag: '🇮🇳' },
	{ name: 'Brazil', shortName: 'BR', flag: '🇧🇷' },
	{ name: 'Italy', shortName: 'IT', flag: '🇮🇹' },
	{ name: 'Spain', shortName: 'ES', flag: '🇪🇸' },
	{ name: 'Russia', shortName: 'RU', flag: '🇷🇺' },
	{ name: 'South Korea', shortName: 'KR', flag: '🇰🇷' },
	{ name: 'Mexico', shortName: 'MX', flag: '🇲🇽' },
]

const Header = () => {
	const [user] = useAuthState(auth)
	const [selectedCountry, setSelectedCountry] = useState(countries[0])
	const basket = useSelector(selectBasket)

	// Selector for the total count of items in the basket
	const selectTotalItemCount = basket.reduce(
		(total, item) => total + item.quantity,
		0,
	)

	const navigate = useNavigate()

	const handleSignOut = async () => {
		try {
			await signOut(auth)
			navigate('/') // Redirect to home after sign-out
		} catch (error) {
			console.error('Error signing out:', error)
		}
	}

	const userName = user?.displayName || user?.email || 'Guest'

	return (
		<header className="w-full h-[80px] md:h-[110px] sticky top-0 z-50 text-white">
			<div className="h-[60px] flex items-center px-4 justify-between bg-[#131921]">
				{/* Left Section: Logo and Search Bar */}
				<div className="flex items-center flex-1 space-x-4">
					<Logo />
					{/* Search Bar */}
					<div className="hidden md:flex items-center flex-1 min-w-[200px] md:min-w-[300px] rounded-md bg-white hover:border-2 hover:border-amber-400 focus-within:border-2 focus-within:border-[#f0c14b] transition-all mr-6">
						<input
							type="text"
							placeholder="Search Amazon"
							className="w-full h-[38px] px-3 py-2 text-black rounded-l-md outline-none"
							aria-label="Search Amazon"
						/>
						<button
							className="h-[38px] p-2 bg-[#cd9042] rounded-r-md hover:bg-[#b37a3a] transition-all"
							aria-label="Search">
							<Search className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* Right Section: Navigation Options */}
				<div className="flex items-center space-x-2 md:space-x-4">
					{/* Mode Toggle */}
					<ModeToggle />

					{/* Country Selector */}
					<DropdownMenu>
						<DropdownMenuTrigger>
							<IconButton className="flex items-center p-2 hover:border hover:border-white hover:shadow-lg transition-all cursor-pointer">
								<span className="text-2xl">{selectedCountry.flag}</span>
								<span className="ml-2">{selectedCountry.shortName}</span>
								<ChevronDown className="ml-1 w-5 h-5" />
							</IconButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-white z-[1000] w-56">
							<DropdownMenuSeparator />
							{countries.map((country) => (
								<DropdownMenuItem
									key={country.shortName}
									onSelect={() => setSelectedCountry(country)}
									className="cursor-pointer">
									{country.name}
									<DropdownMenuShortcut className="text-lg">
										{country.flag}
									</DropdownMenuShortcut>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Delivery Location */}
					{user && (
						<IconButton className="hidden lg:flex flex-col p-2 hover:border hover:border-white transition-all cursor-pointer">
							<span className="text-xs">Delivery to</span>
							<div className="text-sm font-bold flex items-center">
								<MapPin className="mr-1 w-4 h-4" />
								Location
							</div>
						</IconButton>
					)}

					{/* User Sign-In/Sign-Out */}
					<IconButton
						className="hidden lg:flex flex-col p-2 hover:border hover:border-white transition-all cursor-pointer"
						onClick={() => {
							if (!user) {
								navigate('/sign-in')
							} else {
								handleSignOut()
							}
						}}>
						<span className="text-xs">Hello, {userName}</span>
						<span className="text-sm font-bold">
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</IconButton>

					{/* Returns & Orders */}
					<IconButton
						onClick={() => {
							if (!user) {
								navigate('/sign-in')
							} else {
								navigate('/order')
							}
						}}
						className="hidden lg:flex flex-col p-2 hover:border hover:border-white transition-all cursor-pointer">
						<span className="text-xs">Return</span>
						<span className="text-sm font-bold">& Orders</span>
					</IconButton>

					{/* Prime */}
					<IconButton className="hidden lg:flex flex-col justify-start">
						<span className="text-xs">Your</span>
						<span className="text-sm font-bold">Prime</span>
					</IconButton>

					{/* Basket */}
					<IconButton
						onClick={() => {
							if (!user) {
								navigate('/sign-in')
							} else {
								navigate('/checkout')
							}
						}}>
						<ShoppingCart className="w-6 h-6" />
						<p className="text-sm font-bold ml-1">Basket</p>
						<span className="absolute top-0 left-6 mt-[-6px] flex items-center justify-center h-4 w-4 text-xs rounded-full border border-[#f08804] bg-[#f08804] text-black">
							{selectTotalItemCount || 0}
						</span>
					</IconButton>
				</div>
			</div>

			{/* Advertisement Section */}
			<Advertisement />
		</header>
	)
}

export default Header
