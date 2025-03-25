// import SignIn from '@/components/auth/SignIn'
import Spinner from '@/components/Spinner'
import { lazy, Suspense } from 'react'

const SignIn = lazy(() => import('../components/auth/SignIn'))

export default function SignInScreen() {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<SignIn />
			</Suspense>
		</>
	)
}
