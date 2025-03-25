export default function useBestSellers() {
	const products = [
		{
			id: 1,
			name: 'Anker Soundcore Liberty 4 NC Earbuds',
			image:
				'https://images.priceoye.pk/anker-soundcore-liberty-4-nc-earbuds-pakistan-priceoye-0cikw-500x500.webp',
			rating: 4.7,
			reviews: 18,
			price: '15,799',
			originalPrice: '24,000',
			discount: 34,
		},
		{
			id: 2,
			name: 'Xiaomi Smart Band 8 Active',
			image:
				'https://images.priceoye.pk/xiaomi-smart-band-8-active-pakistan-priceoye-np3x9-270x270.webp',
			rating: 5.0,
			reviews: 8,
			price: '5,599',
			originalPrice: '9,000',
			discount: 38,
		},
		{
			id: 3,
			name: 'Samsung Galaxy Buds 2 Pro',
			image:
				'https://images.priceoye.pk/samsung-galaxy-buds-2-pro-pakistan-priceoye-tp64b-270x270.webp',
			rating: 4.9,
			reviews: 110,
			price: '26,599',
			originalPrice: '39,999',
			discount: 34,
		},
		{
			id: 4,
			name: 'Xiaomi Poco Pad',
			image:
				'https://images.priceoye.pk/poco-pad-8gb-256gb-pakistan-priceoye-teakg-270x270.webp',
			rating: 5.0,
			reviews: 2,
			price: '73,999',
			originalPrice: '110,000',
			discount: 33,
		},
		{
			id: 5,
			name: 'Zeblaze Btalk 2 Calling Watch',
			image:
				'https://images.priceoye.pk/zeblaze-btalk-2-calling-watch-pakistan-priceoye-8kbwa-270x270.webp',
			rating: 5.0,
			reviews: 4,
			price: '7,899',
			originalPrice: '8,999',
			discount: 12,
		},
	]

	return { products }
}
