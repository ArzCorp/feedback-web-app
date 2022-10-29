import { useRouter } from 'next/router'
import { EMPTY_STRING, _0 } from 'utils/constants'

import Pill from './Pill'

import styles from 'styles/components/feedbackCard.module.css'

export default function FeedbackCard({ feedback, readOnly }) {
	const readOnlyStyles = readOnly ? EMPTY_STRING : styles.feedbackCardTitle
	const commentsAmount = feedback.comments?.length || _0
	const { push } = useRouter()

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
					{feedback.detail}
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
