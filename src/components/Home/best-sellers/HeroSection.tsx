import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CategoryBar from '../category-bar/CategoryBar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import UseHero from './useHero'

const HeroSection = () => {
	const { heroImages } = UseHero()
	return (
		<>
			{' '}
			<div className="mt-14">
				<CategoryBar />
				<div className="mt-14"></div>
				<Carousel
					infiniteLoop
					autoPlay
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					renderArrowPrev={(onClickHandler, hasPrev) =>
						hasPrev && (
							<button
								type="button"
								onClick={onClickHandler}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 flex justify-center items-center bg-black bg-opacity-50 text-white cursor-pointer hover:bg-opacity-70 hover:border-white rounded-full">
								<ChevronLeft size={24} />
							</button>
						)
					}
					renderArrowNext={(onClickHandler, hasNext) =>
						hasNext && (
							<button
								type="button"
								onClick={onClickHandler}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 flex justify-center items-center bg-black bg-opacity-50 text-white cursor-pointer hover:bg-opacity-70 hover:border-white rounded-full">
								<ChevronRight size={24} />
							</button>
						)
					}>
					{heroImages.map((item) => (
						<div key={item.id}>
							<img
								src={item.image}
								alt={`Slide ${item.id}`}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</Carousel>
			</div>
		</>
	)
}

export default HeroSection
