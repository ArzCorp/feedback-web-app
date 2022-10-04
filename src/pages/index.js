import styles from 'styles/pages/home.module.css'

import Button from 'components/Button'
import Pill from 'components/Pill'

export default function Home() {
	return (
		<div className={styles.container}>
			<Button type="button" variant="red">
				Go back
			</Button>
			<Pill variant="icon">99</Pill>
			<Pill>UX</Pill>
		</div>
	)
}
