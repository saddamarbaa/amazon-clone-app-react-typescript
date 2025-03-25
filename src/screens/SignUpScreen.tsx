// import SignUp from '@/components/auth/SignUp'
import Spinner from '@/components/Spinner'
import { lazy, Suspense } from 'react'

const SignUp = lazy(() => import('../components/auth/SignUp'))

// chinking
// lazy loading
// code spliting
// on demand loading

export default function SignUpScreen() {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<SignUp />
			</Suspense>
		</>
	)
}
