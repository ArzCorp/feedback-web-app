import styles from 'styles/components/button.module.css'

export default function Button({
	children,
	variant = 'purple',
	className,
	...props
}) {
	return (
		<button className={`${styles.btn} ${styles[`btn-${variant}`]}`} {...props}>
			{children}
		</button>
	)
}
