import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NotFoundScreen() {
	return (
		<Wrapper>
			<Content>
				<Title>404</Title>
				<Subtitle>Page Not Found</Subtitle>
				<Text>
					Sorry, the page you are looking for doesn't exist or has been moved.
				</Text>
				<StyledLink to="/">Go Back to Homepage</StyledLink>
			</Content>
		</Wrapper>
	)
}

export default NotFoundScreen

// Styled Components
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #f8f9fa;
`

const Content = styled.div`
	text-align: center;
`

const Title = styled.h1`
	font-size: 10rem;
	font-weight: bold;
	color: #343a40;
	margin-bottom: 1rem;
`

const Subtitle = styled.h2`
	font-size: 2rem;
	color: #495057;
	margin-bottom: 1rem;
`

const Text = styled.p`
	font-size: 1.2rem;
	color: #6c757d;
	margin-bottom: 2rem;
`

const StyledLink = styled(Link)`
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	color: black;
	font-weight: bold;
	background-color: #f0c14b;
	border-radius: 0.3rem;
	text-decoration: none;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #f4d078;
	}
`
