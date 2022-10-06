import { useState } from 'react'

import styles from 'styles/components/dropdown/dropdown.module.css'

import arrowIcon from 'assets/arrow-icon.svg'

import Image from 'next/image'
import DropdownOption from 'components/dropdown/DropdownOption'

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
				<Image
					className={`${styles.dropdownIcon} ${openDropdownIconStyles}`}
					src={arrowIcon}
					width={10}
					height={12}
					alt="Icono de flecha"
				/>
			</h4>
			{isOpen ? (
				<div className={styles.dropdownList}>
					{options.map((option, index) => (
						<DropdownOption
							key={option.key}
							value={option.key}
							isLastOption={index === options.length}
							handleClick={(value) => {
								handleSelectedChange(value)
								setCurrentSelectedOption(value)
							}}
							isSelected={currentSelectedOption === option.key}
						>
							{option.value}
						</DropdownOption>
					))}
				</div>
			) : null}
		</div>
	)
}
