import Header from 'components/Header'
import Layout from 'components/Layout'
import Pill from 'components/Pill'

import styles from 'styles/pages/desktop.module.css'
import { TAGS } from 'utils/mock'

export default function Desktop() {
	return (
		<Layout twoColumns>
			<section className={styles.desktopSidebar}>
				<header className={styles.desktopLogo}>
					<h2>Feedback app</h2>
					<p className="text-small">Board</p>
				</header>
				<div className={styles.desktopTags}>
					<Pill>Todos</Pill>
					{TAGS.map((tag) => (
						<Pill key={tag.id}>{tag.name}</Pill>
					))}
				</div>
				<div className={styles.desktopRoadMap}>
					<header>
						<h3>Roadmap</h3>
						<p className={` text-xs`}>View</p>
					</header>
					<div></div>
				</div>
			</section>
			<section>
				<Header />
			</section>
		</Layout>
	)
}
