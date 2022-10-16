import { useEffect, useState } from 'react'
import { FEEDBACKS } from 'utils/mocks'

export const useFeedbacks = ({ feedbackId } = {}) => {
	const [feedback, setFeedback] = useState({})
	const [feedbacks, setFeedbacks] = useState([])

	useEffect(() => {
		if (feedbackId) {
			const selectedFeedback = FEEDBACKS.find(
				(feedback) => Number(feedback.id) === Number(feedbackId)
			)

			return setFeedback(selectedFeedback)
		}

		setFeedbacks(FEEDBACKS)
	}, [feedbackId])

	return { feedbacks, feedback }
}
