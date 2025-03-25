import { Navigate, Route, Routes, useLocation } from 'react-router'
import NotFoundScreen from './screens/NotFoundScreen'
import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import SignInScreen from './screens/SignInScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import PrivateRoute from './components/PrivateRoute'
import OrderScreen from './screens/OrderScreen'
import CheckoutScreen from './screens/CheckoutScreen'

export default function RouteLayout() {
	const location = useLocation()

	return (
		<Routes key={location.pathname} location={location}>
			{/* Redirect from "/" to "/browser" */}
			<Route path="/browser" element={<Navigate to="/" />} />
			<Route path="/" element={<HomeScreen />} />
			{/*<Route path="/movie/:id" element={<MovieDetailScreen />} />
			<Route path="/profile" element={<PrivateRoute />}>
				<Route path="/profile" element={<ProfileScreen />} />
			</Route> */}

			<Route path="/order" element={<PrivateRoute />}>
				<Route path="/order" element={<OrderScreen />} />
			</Route>
			<Route path="/checkout" element={<PrivateRoute />}>
				<Route path="/checkout" element={<CheckoutScreen />} />
			</Route>
			<Route path="/sign-up" element={<SignUpScreen />} />
			<Route path="/sign-in" element={<SignInScreen />} />
			<Route path="/forgot-password" element={<ForgotPasswordScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	)
}
