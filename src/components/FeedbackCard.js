import { useRouter } from 'next/router'

import styles from 'styles/components/feedbackCard.module.css'

import Pill from './Pill'

export default function FeedbackCard({ feedback, readOnly }) {
	const { push } = useRouter()
	const readOnlyStyles = readOnly ? '' : styles.feedbackCardTitle
	const commentsAmount = feedback.comments.length

	return (
		<article className={styles.feedbackCard}>
			<div className={styles.feedbackCardRanking}>
				<Pill variant="icon">{feedback.ranking}</Pill>
			</div>
			<div>
				<h3
					className={readOnlyStyles}
					onClick={() => {
						if (!readOnly) return push(`feedback/${feedback.id}`)
					}}
				>
					{feedback.title}
				</h3>
				<p className={`text-regular ${styles.feedbackCardSubtitle}`}>
					{feedback.comment}
				</p>
				<Pill readOnly>{feedback.tag}</Pill>
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
