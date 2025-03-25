import { Link } from 'react-router'

export default function NotFoundScreen() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
			<div className="text-center p-8 bg-white rounded-xl  max-w-md w-full transform transition-all hover:scale-105">
				{/* Icon */}
				<div className="mb-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-20 w-20 mx-auto text-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>

				{/* Heading */}
				<h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-gray-700 mb-4">
					Page Not Found
				</h2>

				{/* Description */}
				<p className="text-lg text-gray-600 mb-8">
					Oops! The page you're looking for doesn't exist or has been moved.
					Please check the URL or go back to the homepage.
				</p>

				{/* Back to Home Button */}
				<Link
					to="/"
					className="inline-block px-8 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all transform hover:scale-105 active:scale-95">
					Go Back Home
				</Link>
			</div>
		</div>
	)
}
