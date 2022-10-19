import { useRouter } from 'next/router'
import styles from 'styles/components/button.module.css'

export default function Button({
	children,
	variant = 'purple',
	className,
	icon,
	backTo,
	goTo,
	...props
}) {
	const { push } = useRouter()

	return (
		<button
			className={`${styles.btn} ${styles[`btn-${variant}`]}`}
			{...props}
			onClick={() => {
				if (variant === 'back' || goTo) return push(backTo || goTo)
			}}
		>
			{variant.includes('back') ? (
				<i className={`${styles.btnBackIcon} fa-solid fa-chevron-left`}></i>
			) : null}
			{icon ? <i className={`${icon} ${styles.btnIcon}`}></i> : null}
			<span> {children}</span>
		</button>
	)
}
