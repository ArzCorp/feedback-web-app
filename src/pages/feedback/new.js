import Button from 'components/Button'
import FeedbackForm from 'components/forms/feedbackForm'
import Layout from 'components/Layout'
import styles from 'styles/pages/newFeedback.module.css'

export default function NewFeedbackPage() {
	return (
		<Layout className={styles.layout}>
			<Button url="/desktop" variant="back">
				Regresar
			</Button>
			<FeedbackForm />
		</Layout>
	)
}
