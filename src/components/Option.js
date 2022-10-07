import styles from 'styles/components/option.module.css'

import Image from 'next/image'

import checkIcon from 'assets/check-icon.svg'

export default function Option({
	children,
	value,
	isSelected,
	isLastOption,
	handleClick,
}) {
	const lastItemStyles = isLastOption ? styles.lastItem : ''

	return (
		<div
			className={`${styles.Option} ${lastItemStyles} text-regular`}
			onClick={() => handleClick(value)}
		>
			<p>{children}</p>
			{isSelected ? (
				<Image src={checkIcon} width={12} height={10} alt="Icono de check" />
			) : null}
		</div>
	)
}
