import styles from 'styles/components/dropdown/dropdown.module.css'

import arrowIcon from 'assets/arrow-icon.svg'

import { useState } from 'react'
import Image from 'next/image'

export default function Dropdown({
	children,
	label,
	strongLabel,
	handleOpenChange = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false)

	const stylesDropdownIconOpen = isOpen ? styles.dropdownIconOpen : ''
	const stylesDropdownOpen = isOpen ? styles.dropdownOpen : ''

	return (
		<div
			className={`${styles.dropdown} ${stylesDropdownOpen}`}
			onClick={() => {
				setIsOpen(!isOpen)
				handleOpenChange(!isOpen)
			}}
		>
			<h4 className={styles.dropdownLabel}>
				{label}
				<b>{strongLabel}</b>
				<Image
					className={`${styles.dropdownIcon} ${stylesDropdownIconOpen}`}
					src={arrowIcon}
					width={10}
					height={12}
					alt="Icono de flecha"
				/>
			</h4>
			{isOpen ? <div className={styles.dropdownList}>{children}</div> : null}
		</div>
	)
}
