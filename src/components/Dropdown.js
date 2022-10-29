import { useState } from 'react'
import { EMPTY_ARRAY, EMPTY_FUNCTION, EMPTY_STRING } from 'utils/constants'

import Option from 'components/Option'

import styles from 'styles/components/dropdown.module.css'

export default function Dropdown({
	label,
	strongLabel,
	options = EMPTY_ARRAY,
	handleOpenChange = EMPTY_FUNCTION,
	handleSelectedChange = EMPTY_FUNCTION,
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSelectedOption, setCurrentSelectedOption] = useState(0)

	const openDropdownIconStyles = isOpen ? styles.dropdownIconOpen : EMPTY_STRING
	const openDropdownStyles = isOpen ? styles.dropdownOpen : EMPTY_STRING

	return (
		<div
			className={`${styles.dropdown} ${openDropdownStyles}`}
			onClick={() => {
				setIsOpen(!isOpen)
				handleOpenChange(!isOpen)
			}}
		>
			<h4 className={styles.dropdownLabel}>
				{label}
				<b>{strongLabel}</b>
				<i
					className={`fa-solid fa-chevron-left ${styles.dropdownIcon} ${openDropdownIconStyles}`}
				></i>
			</h4>
			{isOpen ? (
				<div className={styles.dropdownList}>
					{options.map((option, index) => (
						<Option
							key={option.key}
							value={option.key}
							isLastOption={index === options.length}
							handleClick={(value) => {
								handleSelectedChange({ value, text: option.value })
								setCurrentSelectedOption(value)
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
