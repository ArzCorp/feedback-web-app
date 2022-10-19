import styles from 'styles/components/layout.module.css'

export default function Layout({ children, twoColumns, className }) {
	const layoutType = twoColumns
		? styles.twoColumnsLayout
		: styles.oneColumnLayout

	return (
		<main className={styles.layout}>
			<div className={`${styles.layoutContainer} ${layoutType} ${className}`}>
				{children}
			</div>
		</main>
	)
}
