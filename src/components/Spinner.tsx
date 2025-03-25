export default function Spinner() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div>
				<img src={'/loading-spinner.svg'} alt="Loading..." className="h-24" />
			</div>
		</div>
	)
}
