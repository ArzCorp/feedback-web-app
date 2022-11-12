import { useState } from 'react'
import { EMPTY_STRING } from 'utils/constants'

import styles from 'styles/components/textInput.module.css'

export default function TextArea({ handleChange, required, ...props }) {
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState(EMPTY_STRING)

	const inputErrorStyles = error ? styles.inputError : EMPTY_STRING

	const handleValidations = (e) => {
		const { value } = e.target

		if (value.length <= 0 && required) return addError('¡Campo requerido!')

		setError(false)
		setErrorMessage(EMPTY_STRING)
	}

	const addError = (message) => {
		setError(true)
		setErrorMessage(message)
	}

	return (
		<div className={styles.textareaContainer}>
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
