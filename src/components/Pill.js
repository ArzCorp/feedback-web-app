import styles from 'styles/components/pill.module.css'

export default function Pill({
	children,
	value,
	variant,
	readOnly,
	isActive = false,
	handleClick = () => {},
}) {
	const activeDefaultStyles = isActive ? styles.pillDefaultActive : ''

	const variantStyles =
		variant === 'icon' ? styles.pillVariantIcon : styles.pillDefault

	const iconActiveStyles = isActive ? styles.pillIconActive : ''

	const pillReadOnlyStyles = readOnly ? styles.pillReadOnly : ''

	return (
		<div
			className={`${activeDefaultStyles} ${styles.pill} ${variantStyles} ${pillReadOnlyStyles} text-xs`}
			onClick={() => handleClick(value)}
		>
			{variant === 'icon' ? (
				<i
					className={`${styles.pillIcon} ${iconActiveStyles} fa-solid fa-chevron-left`}
				></i>
			) : (
				''
			)}
			<p className={styles.pillText}>{children}</p>
		</div>
	)
}
