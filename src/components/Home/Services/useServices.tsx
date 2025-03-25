const useServices = () => {
	const services = [
		{
			id: 1,
			image: 'https://static.priceoye.pk/icons/approved-feature.svg',
			title: 'PTA Approved',
			description: 'Mobile Phone',
		},
		{
			id: 2,
			image: 'https://static.priceoye.pk/icons/warranty-feature.svg',
			title: '1 Year',
			description: 'Brand Warranty',
		},
		{
			id: 3,
			image: '	https://static.priceoye.pk/icons/video-shooting-camera.svg',
			title: 'Packaging Video',
			description: 'See Your Product',
		},
		{
			id: 4,
			image: 'https://static.priceoye.pk/icons/shipping-feature.svg',
			title: 'Fast Delivery',
			description: 'All Over Pakistan',
		},
	]

	return { services }
}

export default useServices
