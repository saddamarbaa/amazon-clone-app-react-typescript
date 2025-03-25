import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'next-themes'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './global-states/store.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<BrowserRouter>
					<App />

					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</StrictMode>,
)
