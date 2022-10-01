import styles from 'styles/pages/home.module.css'

import Button from 'components/Button'

export default function Home() {
	return (
		<div className={styles.container}>
			<title>Home</title>
			<h1 className={styles.title}>
				Bienvenido a <span className="titleStrong">Feedback app</span>
			</h1>
			<span className={styles.divider}></span>
			<h1>Titulo h1</h1>
			<h2>Titulo h2</h2>
			<h3>Titulo h3</h3>
			<h4>Titulo h4</h4>
			<br />
			<p className="text-regular">Texto regular</p>
			<p className="text-small">Texto small</p>
			<p className="text-xs">Texto extra small</p>
			<span className={styles.divider}></span>
			<Button type="button" variant="back-dark">
				Go back
			</Button>
		</div>
	)
}
