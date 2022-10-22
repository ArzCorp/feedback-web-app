import { useStatus } from 'hooks/useStatus'
import styles from 'styles/components/roadmap.module.css'

export default function Roadmap({ className }) {
	const { status } = useStatus()

	return (
		<div className={`${styles.roadmap} ${className}`}>
			<header>
				<h3>Roadmap</h3>
				<p className={`text-xs`}>View</p>
			</header>
			<div className={styles.roadmapStatusList}>
				{status.map((state) => {
					return (
						<div
							key={state.id}
							className={`${styles.roadmapStatusItem} text-regular`}
						>
							<p>
								<span
									className={styles.roadmapStatusItemCircle}
									style={{ backgroundColor: state.color }}
								></span>
								{` ${state.name}`}
							</p>
							<p className={`text-regular ${styles.roadmapStatusItemNumber}`}>
								{state.task}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
