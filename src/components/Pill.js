import { EMPTY_FUNCTION, EMPTY_STRING } from 'utils/constants'

import styles from 'styles/components/pill.module.css'

export default function Pill({
	children,
	value,
	variant,
	readOnly,
	isActive = false,
	handleClick = EMPTY_FUNCTION,
}) {
	const activeDefaultStyles = isActive ? styles.pillDefaultActive : EMPTY_STRING

	const variantStyles =
		variant === 'icon' ? styles.pillVariantIcon : styles.pillDefault

	const iconActiveStyles = isActive ? styles.pillIconActive : EMPTY_STRING

	const pillReadOnlyStyles = readOnly ? styles.pillReadOnly : EMPTY_STRING

	return (
		<div
			className={`${activeDefaultStyles} ${styles.pill} ${variantStyles} ${pillReadOnlyStyles} text-xs`}
			onClick={() => handleClick(value)}
		>
			{variant === 'icon' ? (
				<i
					className={`${styles.pillIcon} ${iconActiveStyles} fa-solid fa-chevron-left`}
				></i>
			) : null}
			<p className={styles.pillText}>{children}</p>
		</div>
	)
}
