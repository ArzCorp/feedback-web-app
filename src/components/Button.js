import { useRouter } from 'next/router'
import { BACK, EMPTY_FUNCTION } from 'utils/constants'

import styles from 'styles/components/button.module.css'

export default function Button({
	children,
	variant = 'purple',
	icon,
	url,
	handleClick = EMPTY_FUNCTION,
	...props
}) {
	const { push } = useRouter()

	const onClick = () => {
		if (variant === BACK || url) return push(url)
		return handleClick()
	}

	const backButtonStyles = variant.includes(BACK)
		? styles.showBackButton
		: styles.hideBackButton

	const iconStyles = icon ? styles.showIcon : styles.hideIcon

	return (
		<button
			{...props}
			className={`${styles.btn} ${styles[`btn-${variant}`]}`}
			onClick={onClick}
		>
			<i
				className={`${styles.btnBackIcon} ${backButtonStyles} fa-solid fa-chevron-left`}
			></i>
			<i className={`${icon} ${styles.btnIcon} ${iconStyles}`}></i>
			<span> {children}</span>
		</button>
	)
}
