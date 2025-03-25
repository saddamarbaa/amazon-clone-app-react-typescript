import * as Yup from 'yup'

const useAuth = () => {
	const signupSchemaValidation = Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.min(3, 'Name must be at least 3 characters')
			.max(10, 'Name must not exceed 10 characters')
			.matches(/^[a-zA-Z ,.'-]+$/, 'Name can only contain letters.'),
		email: Yup.string()
			.email('Enter a valid email address.')
			.required('Email address is required.')
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				'Invalid email address. Please use a valid format.',
			),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(40, 'Password must not exceed 40 characters')
			.matches(/[0-9]/, 'Password requires a number')
			.matches(/[a-z]/, 'Password requires a lowercase letter')
			.matches(/[A-Z]/, 'Password requires an uppercase letter')
			.matches(/[^\w]/, 'Password requires a symbol'),
		confirmPassword: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password')], 'Confirm Password does not match'),
	})

	const loginSchemaValidation = Yup.object().shape({
		email: Yup.string()
			.email('Enter a valid email address.')
			.required('Email address is required.')
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				'Invalid email address. Please use a valid format.',
			),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(40, 'Password must not exceed 40 characters')
			.matches(/[0-9]/, 'Password requires a number')
			.matches(/[a-z]/, 'Password requires a lowercase letter')
			.matches(/[A-Z]/, 'Password requires an uppercase letter')
			.matches(/[^\w]/, 'Password requires a symbol'),
		acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
	})

	const restPasswordSchemaValidation = Yup.object().shape({
		email: Yup.string()
			.email('Enter a valid email address.')
			.required('Email address is required.')
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				'Invalid email address. Please use a valid format.',
			),
	})

	return {
		restPasswordSchemaValidation,
		loginSchemaValidation,
		signupSchemaValidation,
	}
}

export default useAuth
