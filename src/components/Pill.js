import styles from 'styles/components/pill.module.css'

import { useState } from 'react'

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
				<i
					class={`${styles.pillIcon} ${iconActiveStyles} fa-solid fa-chevron-left`}
				></i>
			) : (
				''
			)}
			<p className={styles.pillText}>{children}</p>
		</div>
	)
}
