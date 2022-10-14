import styles from 'styles/components/tagList.module.css'
import { TAGS } from 'utils/mock'
import Pill from './Pill'

export default function TagList({ className }) {
	return (
		<div className={className}>
			<div className={styles.tagList}>
				<Pill>Todos</Pill>
				{TAGS.map((tag) => (
					<Pill key={tag.id}>{tag.name}</Pill>
				))}
			</div>
		</div>
	)
}
