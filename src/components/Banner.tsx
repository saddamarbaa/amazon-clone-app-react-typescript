import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const banners = [
	{ src: '/images/banner3.jpg', alt: 'Amazon Banner 1' },
	{ src: '/images/banner5.jpg', alt: 'Amazon Banner 2' },
	{ src: '/images/banner8.jpg', alt: 'Amazon Banner 3' },
	{ src: '/images/banner4.jpg', alt: 'Amazon Banner 4' },
	{ src: '/images/banner.jpg', alt: 'Amazon Banner 5' },
	{ src: '/images/banner2.jpg', alt: 'Amazon Banner 6' },
	{ src: '/images/banner10.jpg', alt: 'Amazon Banner 7' },
]

const Banner = () => {
	return (
		<div className="w-full flex flex-col">
			{' '}
			{/* Add white background */}
			<div className="z-[-3] w-full flex justify-center mx-auto mt-[-10px] mb-[-25%]">
				<Carousel
					infiniteLoop
					autoPlay
					showStatus={false}
					showIndicators={false}
					showThumbs={false}
					interval={4000}>
					{banners.map((banner, index) => (
						<div key={index}>
							<img
								src={banner.src}
								alt={banner.alt}
								className="w-full max-w-full max-h-full z-[-3] object-contain"
								style={{
									maskImage:
										'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
								}}
								onError={(e) => {
									e.currentTarget.src = '/images/fallback-banner.jpg' // Fallback image
								}}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default Banner
