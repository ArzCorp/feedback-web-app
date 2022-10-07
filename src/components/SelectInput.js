import { useState } from 'react'

import styles from 'styles/components/selectInput.module.css'

import arrowIcon from 'assets/arrow-icon.svg'

import Option from './Option'
import Image from 'next/image'

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
				onFocus={() => setIsOpen(true)}
			/>
			<figure
				className={`${styles.selectInputIcon} ${openSelectInputIconStyles}`}
			>
				<Image src={arrowIcon} width={10} height={12} alt="Icono de flecha" />
			</figure>
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
