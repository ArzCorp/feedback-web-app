import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useFeedbacks = ({ feedbackId = null } = {}) => {
	const [feedback, setFeedback] = useState({})
	const [feedbacks, setFeedbacks] = useState([])

	const getFeedbacks = async () => {
		const newFeedbacks = await request({ endpoint: 'feedbacks' })
		setFeedbacks(newFeedbacks)
	}

	const getFeedback = async (id) => {
		const newFeedback = await request({ endpoint: `feedbacks/${id}` })
		setFeedback(newFeedback)
	}

	useEffect(() => {
		if (feedbackId === null) {
			getFeedbacks()
		} else {
			getFeedback(feedbackId)
		}
	}, [feedbackId])

	return { feedbacks, feedback }
}
