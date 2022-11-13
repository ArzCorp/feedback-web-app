import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useReplies = ({ commentId } = {}) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [replies, setReplies] = useState([])
	const { push } = useRouter()

	const getReplies = async (id) => {
		try {
			const newReply = await request({ endpoint: `replies/${id}` })
			setReplies(newReply.data)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	const newReply = async (data) => {
		try {
			await request({
				endpoint: `replies`,
				method: 'POST',
				body: {
					...data,
					userId: 1,
				},
			})
			setLoading(false)
			getReplies(data.commentId)
		} catch (error) {
			console.warn(error.message)
		}
	}

	useEffect(() => {
		if (commentId) {
			getReplies(commentId)
		}
	}, [commentId])

	return {
		newReply,
		replies,
		loading,
		error,
	}
}
