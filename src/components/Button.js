import Image from 'next/image'
import styles from 'styles/components/button.module.css'
import icon from '../assets/arrow-icon.svg'

export default function Button({
	children,
	variant = 'purple',
	className,
	icon,
	...props
}) {
	return (
		<button className={`${styles.btn} ${styles[`btn-${variant}`]}`} {...props}>
			{variant.includes('back') ? (
				<Image
					width={15}
					height={10}
					alt="Flecha izquierda"
					src={icon}
					className={styles[`icon-${variant}`]}
				/>
			) : null}
			{icon ? <i className={`${icon} ${styles.btnIcon}`}></i> : null} {children}
		</button>
	)
}
