import { cn } from '@/lib/utils'

const Skeleton = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn(
				'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
				className,
			)}
			{...props}
		/>
	)
}

export { Skeleton }
