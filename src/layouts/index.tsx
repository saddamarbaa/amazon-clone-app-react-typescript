import React from 'react'

import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main className="Layout">{children}</main>
			<Footer />
		</>
	)
}

export default Layout
