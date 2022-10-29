import { EMPTY_STRING } from 'utils/constants'

import Image from 'next/image'
import checkIcon from 'assets/check-icon.svg'

import styles from 'styles/components/option.module.css'

export default function Option({
	children,
	isSelected,
	isLastOption,
	handleClick,
}) {
	const lastItemStyles = isLastOption ? styles.lastItem : EMPTY_STRING

	return (
		<div
			className={`${styles.Option} ${lastItemStyles} text-regular`}
			onClick={handleClick}
		>
			<p>{children}</p>
			{isSelected ? (
				<Image src={checkIcon} width={12} height={10} alt="Icono de check" />
			) : null}
		</div>
	)
}
