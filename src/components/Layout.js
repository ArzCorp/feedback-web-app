import styles from 'styles/components/layout.module.css'

export default function Layout({ children }) {
	return (
		<main className={styles.layout}>
			<div className={styles.layoutContainer}>{children}</div>
		</main>
	)
}
