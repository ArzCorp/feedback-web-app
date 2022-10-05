import styles from 'styles/pages/home.module.css'

import Button from 'components/Button'
import Pill from 'components/Pill'
import Dropdown from 'components/dropdown/Dropdown'
import DropdownItem from 'components/dropdown/DropdownItem'

export default function Home() {
	return (
		<div className={styles.container}>
			<Button type="button" variant="red">
				Go back
			</Button>
			<Pill variant="icon">99</Pill>
			<Pill>UX</Pill>
			<Dropdown label="Sort by:" strongLabel=" Most Upvates">
				<DropdownItem>Item 1</DropdownItem>
			</Dropdown>
		</div>
	)
}
