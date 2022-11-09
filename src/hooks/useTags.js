import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useTags = () => {
	const [loading, setLoading] = useState(false)
	const [tags, setTags] = useState([])

	const getTags = async () => {
		try {
			const newTags = await request({ endpoint: 'tags' })
			setTags(newTags.data)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	useEffect(() => {
		getTags()
	}, [])

	return { tags, loading }
}
