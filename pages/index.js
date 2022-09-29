import styles from '../styles/Home.module.css'
import generalStyles from '../styles/general.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Bienvenido a <span className={styles.titleStrong}>Feedback app</span>
			</h1>
			<span className={styles.divider}></span>
			<h1>Titulo h1</h1>
			<h2>Titulo h2</h2>
			<h3>Titulo h3</h3>
			<h4>Titulo h4</h4>
			<br />
			<p className={generalStyles.textRegular}>Texto regular</p>
			<p className={generalStyles.textSmall}>Texto small</p>
			<p className={generalStyles.textXSmall}>Texto extra small</p>
		</div>
	)
}
