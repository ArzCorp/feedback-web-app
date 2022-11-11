import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useComments = ({ feedbackId } = {}) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [comments, setComments] = useState([])
	const { push } = useRouter()

	const getComments = async (id) => {
		try {
			const newComment = await request({ endpoint: `comments/${id}` })
			setComments(newComment.data)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	const newComment = async (data) => {
		try {
			await request({
				endpoint: `Comments`,
				method: 'POST',
				body: {
					...data,
					userId: 1,
					feedbackId: feedbackId,
				},
			})
			setLoading(false)
			getComments(feedbackId)
		} catch (error) {
			console.warn(error.message)
		}
	}

	useEffect(() => {
		getComments(feedbackId)
	}, [feedbackId])

	return {
		newComment,
		comments,
		loading,
		error,
	}
}
