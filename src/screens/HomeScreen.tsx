import HomePageContent from '@/components/Home/Home'
import ShimmerLayout from '@/components/Shimmer-ui/ShimmerLoader'
import { auth } from '@/config'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function HomeScreen() {
	const [user, loading, error] = useAuthState(auth)

	console.log(user, loading, error)

	if (loading) {
		return (
			// Initialising User...
			<ShimmerLayout />
		)
	}

	return <HomePageContent />
}
