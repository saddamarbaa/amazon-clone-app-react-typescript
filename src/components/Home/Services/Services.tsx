import useServices from './useServices'

const Services = () => {
	const { services } = useServices()
	return (
		<div className="pt-60 lg:pt-24 pb-4 text-gray-900">
			<div className="bg-white">
				<div className="container mx-auto py-7 flex justify-between items-center flex-wrap gap-6 md:gap-3">
					{services.map((service) => (
						<div key={service.id} className="mx-8 text-center">
							<div className="flex justify-center mb-2">
								<img
									className="w-14 lg:w-20"
									src={service.image}
									alt={service.title}
								/>
							</div>
							<h2 className="font-semibold">{service.title}</h2>
							<p className="text-xs text-slate-500">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
