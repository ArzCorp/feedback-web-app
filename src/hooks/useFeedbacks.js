import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useFeedbacks = ({ feedbackId } = {}) => {
	const [loading, setLoading] = useState(false)
	const [feedback, setFeedback] = useState({})
	const [feedbacks, setFeedbacks] = useState([])

	const getFeedbacks = async () => {
		try {
			const newFeedbacks = await request({ endpoint: 'feedbacks' })
			setFeedbacks(newFeedbacks)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	const getFeedback = async (id) => {
		try {
			const newFeedback = await request({ endpoint: `feedbacks/${id}` })
			setFeedback(newFeedback)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	useEffect(() => {
		setLoading(true)
		if (!feedbackId) {
			getFeedbacks()
		} else {
			getFeedback(feedbackId)
		}
	}, [feedbackId])

	return { feedbacks, feedback, loading }
}
