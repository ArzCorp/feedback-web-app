import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useFeedbacks = ({ feedbackId } = {}) => {
	const [loading, setLoading] = useState(false)
	const [feedback, setFeedback] = useState({})
	const [feedbacks, setFeedbacks] = useState([])
	const { push } = useRouter()

	const getFeedbacks = async () => {
		try {
			const newFeedbacks = await request({ endpoint: 'feedbacks' })
			setFeedbacks(newFeedbacks.data)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	const getFeedback = async (id) => {
		try {
			const newFeedback = await request({ endpoint: `feedbacks/${id}` })
			setFeedback(newFeedback.data)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	const newFeedback = async (data) => {
		try {
			const newFeedback = await request({
				endpoint: `feedbacks`,
				method: 'POST',
				body: {
					...data,
					ranking: 0,
					statusId: 1,
				},
			})
			setFeedback(newFeedback)
			setLoading(false)
			push('/desktop')
		} catch (error) {
			console.warn(error.message)
		}
	}

	const editFeedback = async (data) => {
		try {
			const response = await request({
				endpoint: `feedbacks/${data.id}`,
				method: 'PATCH',
				body: data,
			})

			setLoading(false)
			push('/desktop')
			return response
		} catch (error) {
			console.warn(error.message)
		}
	}

	const deleteFeedback = async (data) => {
		try {
			const response = await request({
				endpoint: `feedbacks/${data.id}`,
				method: 'DELETE',
			})

			setLoading(false)
			push('/desktop')
			return response
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

	return {
		feedbacks,
		feedback,
		loading,
		newFeedback,
		editFeedback,
		deleteFeedback,
	}
}
