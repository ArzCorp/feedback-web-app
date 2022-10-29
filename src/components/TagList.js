import { useTags } from 'hooks/useTags'
import { useState } from 'react'
import { ALL } from 'utils/constants'

import Pill from './Pill'

import styles from 'styles/components/tagList.module.css'

export default function TagList({ className }) {
	const { tags } = useTags()
	const [selectedTag, setSelectedTag] = useState(ALL)

	return (
		<div className={className}>
			<div className={styles.tagList}>
				<Pill
					isActive={selectedTag === ALL}
					handleClick={() => setSelectedTag(ALL)}
				>
					Todos
				</Pill>
				{tags.map((tag) => (
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
