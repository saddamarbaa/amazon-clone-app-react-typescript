// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), // '@' will be mapped to 'src' folder
		},
	},
})
