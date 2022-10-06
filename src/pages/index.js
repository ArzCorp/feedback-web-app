import styles from 'styles/pages/home.module.css'

import { OPTIONS } from 'utils/mock'

import Button from 'components/Button'
import Pill from 'components/Pill'
import Dropdown from 'components/dropdown/Dropdown'

export default function Home() {
	return (
		<div className={styles.container}>
			<Button type="button" variant="red">
				Go back
			</Button>
			<Pill variant="icon">99</Pill>
			<Pill>UX</Pill>
			<Dropdown
				label="Sort by:"
				strongLabel=" Most Upvates"
				options={OPTIONS}
			/>
		</div>
	)
}
