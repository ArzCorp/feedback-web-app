import { useState } from 'react'

import styles from 'styles/components/selectInput.module.css'

import Option from './Option'

export default function SelectInput({
	label,
	options = [],
	name,
	handleSelectedChange = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSelectedOption, setCurrentSelectedOption] = useState({})

	const openSelectInputIconStyles = isOpen ? styles.selectInputIconOpen : ''

	return (
		<div className={styles.selectInputContainer}>
			<input
				type="text"
				value={currentSelectedOption.name || label}
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
							isLastOption={index === options.length}
							handleClick={() => {
								handleSelectedChange({
									target: {
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
							isSelected={currentSelectedOption === option.id}
						>
							{option.name}
						</Option>
					))}
				</div>
			) : null}
		</div>
	)
}
