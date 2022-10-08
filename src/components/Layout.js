import styles from 'styles/components/layout.module.css'

export default function Layout({ children, twoColumns }) {
	const layoutType = twoColumns ? styles.twoColumnsLayout : ''

	return (
		<main className={styles.layout}>
			<div className={`${styles.layoutContainer} ${layoutType}`}>
				{children}
			</div>
		</main>
	)
}
