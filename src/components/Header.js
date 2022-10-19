import { useState } from 'react'
import { OPTIONS } from 'utils/mocks'
import Button from './Button'
import Dropdown from './Dropdown'
import styles from 'styles/components/header.module.css'

export default function Header() {
	const [currentSuggestions, setCurrentSuggestions] = useState(0)
	const [currentFilter, setCurrentFilter] = useState('')
	return (
		<header className={styles.header}>
			<div className={styles.headerDetails}>
				<h3>
					<i className="fa-solid fa-lightbulb"></i>{' '}
					{`${currentSuggestions} Sugerencias`}
				</h3>
				<Dropdown
					label="Ordenar por: "
					strongLabel={currentFilter}
					options={OPTIONS}
					handleSelectedChange={(selected) => {
						console.log(selected)
						setCurrentFilter(selected.text)
					}}
				/>
			</div>
			<Button icon="fa-solid fa-plus" goTo="/feedback/new">
				Añadir
			</Button>
		</header>
	)
}
