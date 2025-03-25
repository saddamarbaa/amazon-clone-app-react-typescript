import { cn } from '@/lib/utils'

type Props = {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}
export default function IconButton({ children, className, onClick }: Props) {
	function handleClick() {
		if (onClick) {
			onClick()
		}
	}
	return (
		<div
			onClick={handleClick}
			className={cn(
				'flex  p-2 hover:border hover:border-white hover:shadow-lg  cursor-pointer relative   transition duration-150',
				className,
			)}>
			{children}
		</div>
	)
}
