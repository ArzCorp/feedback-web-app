import Image from 'next/image'
import styles from 'styles/components/button.module.css'
import icon from '../assets/icon-arrow.svg'

export default function Button({
	children,
	variant = 'purple',
	className,
	...props
}) {
	return (
		<button className={`${styles.btn} ${styles[`btn-${variant}`]}`} {...props}>
			<Image
				width={15}
				height={10}
				alt="Flecha izquierda"
				src={icon}
				className={styles[`icon-${variant}`]}
			/>
			{children}
		</button>
	)
}
