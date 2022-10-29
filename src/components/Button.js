import { useRouter } from 'next/router'
import { BACK_BUTTON_VARIANT, EMPTY_FUNCTION } from 'utils/constants'

import styles from 'styles/components/button.module.css'

export default function Button({
	children,
	variant = 'purple',
	className,
	icon,
	backTo,
	goTo,
	handleClick = EMPTY_FUNCTION,
	...props
}) {
	const { push } = useRouter()

	return (
		<button
			{...props}
			className={`${styles.btn} ${styles[`btn-${variant}`]}`}
			onClick={() => {
				if (variant === BACK_BUTTON_VARIANT || goTo) return push(backTo || goTo)
				return handleClick()
			}}
		>
			{variant.includes(BACK_BUTTON_VARIANT) ? (
				<i className={`${styles.btnBackIcon} fa-solid fa-chevron-left`}></i>
			) : null}
			{icon ? <i className={`${icon} ${styles.btnIcon}`}></i> : null}
			<span> {children}</span>
		</button>
	)
}
