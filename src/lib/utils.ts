import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

//  function to truncate(cut) the string if the length of given string
//  bigger than  given number(n)
export function truncate(string: string, n: number) {
	return string.length > n ? `${string.substr(0, n - 1)}....` : string
}

export function getRandomIntNumberBetween(min = 1, max = 10) {
	// min: 5, max: 10
	return Math.floor(Math.random() * (max - min + 1) + min) // 10.999999999999 => 10
}
