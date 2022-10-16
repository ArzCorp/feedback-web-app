import { useState } from 'react'
import styles from 'styles/components/tagList.module.css'
import { TAGS } from 'utils/mocks'
import Pill from './Pill'

export default function TagList({ className }) {
	const [selectedTag, setSelectedTag] = useState('all')

	return (
		<div className={className}>
			<div className={styles.tagList}>
				<Pill
					isActive={selectedTag === 'all'}
					handleClick={() => setSelectedTag('all')}
				>
					Todos
				</Pill>
				{TAGS.map((tag) => (
					<Pill
						key={tag.id}
						value={tag.id}
						isActive={selectedTag === tag.id}
						handleClick={(value) => setSelectedTag(value)}
					>
						{tag.name}
					</Pill>
				))}
			</div>
		</div>
	)
}
