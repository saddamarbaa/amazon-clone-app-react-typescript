import Layout from '../wrapper'
import BestSellers from './best-sellers/BestSellers'
import HeroSection from './best-sellers/HeroSection'
import EarbudGallery from './earbud-gallery/EarbudGallery'
import MobileGallery from './mobile-gallery/MobileGallery'
import ReasonToBuy from './reason-to-buy/ReasonToBuy'
import TrimmerShaverCard from './trimmer-shaver-card/TrimmerShaverCard'
import Services from './Services/Services'
import SmartWatchGallery from './smart-watch-gallery/SmartWatchGallery'
import TradingProducts from './trading-products/TradingProducts'

const HomePageContent = () => {
	return (
		<Layout>
			<BestSellers />
			<HeroSection />
			<EarbudGallery />
			<MobileGallery />
			<ReasonToBuy />
			<TrimmerShaverCard />
			<Services />
			<SmartWatchGallery />
			<TradingProducts />
		</Layout>
	)
}

export default HomePageContent
