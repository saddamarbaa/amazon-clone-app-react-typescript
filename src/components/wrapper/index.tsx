import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className="dark:text-white text-gray-900 min-h-screen flex flex-col">
			{' '}
			{/* For dark mode */}
			<Header />
			<main className="mb-20 pt-0 flex-1 min-h-[50vh] flex flex-col ">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout
