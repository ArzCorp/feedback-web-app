import { useState } from 'react'

import styles from 'styles/components/dropdown.module.css'

import Option from 'components/Option'

export default function Dropdown({
	label,
	strongLabel,
	options = [],
	handleOpenChange = () => {},
	handleSelectedChange = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSelectedOption, setCurrentSelectedOption] = useState(0)

	const openDropdownIconStyles = isOpen ? styles.dropdownIconOpen : ''
	const openDropdownStyles = isOpen ? styles.dropdownOpen : ''

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
