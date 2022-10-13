import { useRouter } from 'next/router'

import styles from 'styles/components/feedbackCard.module.css'

import Pill from './Pill'

export default function FeedbackCard({
	ranking = 0,
	title,
	subtitle,
	commentsAmount = 0,
	commentId,
	tag,
	readOnly,
}) {
	const { push } = useRouter()
	const readOnlyStyles = readOnly ? '' : styles.feedbackCardTitle

	return (
		<article className={styles.feedbackCard}>
			<div className={styles.feedbackCardRanking}>
				<Pill variant="icon">{ranking}</Pill>
			</div>
			<div>
				<h3
					className={readOnlyStyles}
					onClick={() => {
						if (!readOnly) return push(`comments/${commentId}`)
					}}
				>
					{title}
				</h3>
				<p className={`text-regular ${styles.feedbackCardSubtitle}`}>
					{subtitle}
				</p>
				<Pill readOnly>{tag}</Pill>
			</div>
			<div className={styles.feedbackCardComments}>
				<h3>
					<i className={`fa-solid fa-comment ${styles.feedbackCardIcon}`}></i>
					{`${commentsAmount}`}
				</h3>
			</div>
		</article>
	)
}
