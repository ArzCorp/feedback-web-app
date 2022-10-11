import { useState } from 'react'
import styles from 'styles/components/textInput.module.css'

export default function TextArea({ handleChange, required, ...props }) {
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const inputErrorStyles = error ? styles.inputError : ''

	const handleValidations = (e) => {
		const { value } = e.target

		if (value.length <= 0 && required) return addError('¡Campo requerido!')

		setError(false)
		setErrorMessage('')
	}

	const addError = (message) => {
		setError(true)
		setErrorMessage(message)
	}

	return (
		<div>
			<textarea
				className={`${styles.input} ${inputErrorStyles} ${styles.textarea} text-small`}
				type="text"
				onChange={handleChange}
				onKeyUp={handleValidations}
				onBlur={handleValidations}
				{...props}
			/>
			{error ? (
				<h4 className={`${styles.inputErrorMessage} text-small`}>
					{errorMessage}
				</h4>
			) : null}
		</div>
	)
}
