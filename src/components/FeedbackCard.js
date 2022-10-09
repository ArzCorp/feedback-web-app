import Pill from './Pill'

import styles from 'styles/components/feedbackCard.module.css'

export default function FeedbackCard({
	ranking = 0,
	title,
	subtitle,
	commentsAmount = 0,
	tag,
}) {
	return (
		<article className={styles.feedbackCard}>
			<div className={styles.FeedbackCardRanking}>
				<Pill variant="icon">{ranking}</Pill>
			</div>
			<div>
				<h3>{title}</h3>
				<p className="text-regular">{subtitle}</p>
			</div>
			<div className={styles.feedbackCardComments}>
				<h3>
					<i className={`fa-solid fa-comment ${styles.feedbackCardIcon}`}></i>
					{`${commentsAmount}`}
				</h3>
			</div>
			<div className={styles.feedbackCardTag}>
				<Pill readOnly>{tag}</Pill>
			</div>
		</article>
	)
}
