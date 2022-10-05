import styles from 'styles/components/pill.module.css'
import arrowIcon from 'assets/arrow-icon.svg'

import { useState } from 'react'
import Image from 'next/image'

export default function Pill({
	children,
	value,
	variant,
	handleClick = () => {},
}) {
	const [isActive, setIsActive] = useState(false)

	const activeDefaultStyles = isActive ? styles.pillDefaultActive : ''

	const variantStyles =
		variant === 'icon' ? styles.pillVariantIcon : styles.pillDefault

	const iconActiveStyles = isActive ? styles.pillIconActive : ''

	return (
		<div
			className={`${activeDefaultStyles} ${styles.pill} ${variantStyles} text-xs`}
			onClick={() => {
				setIsActive(!isActive)
				if (isActive) return handleClick(value)
				return handleClick('')
			}}
		>
			{variant === 'icon' ? (
				<Image
					className={`${iconActiveStyles} ${styles.pillIcon}`}
					src={arrowIcon}
					width={14}
					height={10}
					alt="Flecha hacia arriba"
				/>
			) : (
				''
			)}
			<p className={styles.pillText}>{children}</p>
		</div>
	)
}
