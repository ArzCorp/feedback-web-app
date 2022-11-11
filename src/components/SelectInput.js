import { useEffect, useState } from 'react'
import { EMPTY_ARRAY, EMPTY_FUNCTION, EMPTY_STRING } from 'utils/constants'

import Option from './Option'

import styles from 'styles/components/selectInput.module.css'

export default function SelectInput({
	label,
	options = EMPTY_ARRAY,
	name,
	handleSelectedChange = EMPTY_FUNCTION,
	value,
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSelectedOption, setCurrentSelectedOption] = useState({})

	const openSelectInputIconStyles = isOpen
		? styles.selectInputIconOpen
		: EMPTY_STRING

	const setDefaultSelectedOption = (currentOptions, defaultValue) => {
		if (defaultValue) {
			const defaultOption = currentOptions.find(
				(option) => option.id === defaultValue
			)
			setCurrentSelectedOption(defaultOption)
		}
	}

	useEffect(() => {
		setDefaultSelectedOption(options, value)
	}, [value, options])

	return (
		<div className={styles.selectInputContainer}>
			<input
				type="text"
				value={currentSelectedOption?.name || label}
				readOnly
				className={`${styles.selectInput} text-small`}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<i
				className={`${styles.selectInputIcon} ${openSelectInputIconStyles} fa-solid fa-chevron-left`}
			></i>
			{isOpen ? (
				<div className={styles.selectInputList}>
					{options.map((option, index) => (
						<Option
							key={option.id}
							isLastOption={index + 1 === options.length}
							handleClick={() => {
								handleSelectedChange({
									target: {
										type: 'select',
										name,
										value: option.name,
										id: option.id,
									},
								})
								setCurrentSelectedOption({
									id: option.id,
									name: option.name,
								})
								setIsOpen(false)
							}}
							isSelected={currentSelectedOption.id === option.id}
						>
							{option.name}
						</Option>
					))}
				</div>
			) : null}
		</div>
	)
}
