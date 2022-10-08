import { useState } from 'react'

import styles from 'styles/components/selectInput.module.css'

import Option from './Option'

export default function SelectInput({
	label,
	options = '',
	handleSelectedChange = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSelectedOption, setCurrentSelectedOption] = useState()

	const openSelectInputIconStyles = isOpen ? styles.selectInputIconOpen : ''

	return (
		<div className={styles.selectInputContainer}>
			<input
				type="text"
				value={label}
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
							key={option.key}
							value={option.key}
							isLastOption={index === options.length}
							handleClick={(value) => {
								handleSelectedChange(value)
								setCurrentSelectedOption(value)
								setIsOpen(false)
							}}
							isSelected={currentSelectedOption === option.key}
						>
							{option.value}
						</Option>
					))}
				</div>
			) : null}
		</div>
	)
}
