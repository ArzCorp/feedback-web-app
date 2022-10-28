import { useFeedbacks } from 'hooks/useFeedbacks'
import { useRouter } from 'next/router'

import Button from 'components/Button'
import FeedbackForm from 'components/forms/feedbackForm'
import Layout from 'components/Layout'
import styles from 'styles/pages/newFeedback.module.css'

export default function EditFeedbackPage() {
	const { query } = useRouter()
	const { feedback } = useFeedbacks({ feedbackId: query.id })

	return (
		<Layout className={styles.layout}>
			<Button backTo="/desktop" variant="back">
				Regresar
			</Button>
			<FeedbackForm feedback={feedback} />
		</Layout>
	)
}
