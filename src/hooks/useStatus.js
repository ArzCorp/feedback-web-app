import { useEffect, useState } from 'react'
import { request } from 'utils/request'

export const useStatus = () => {
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState([])

	const getStatus = async () => {
		try {
			const newStatus = await request({ endpoint: 'status' })
			setStatus(newStatus.data)
			setLoading(false)
		} catch (error) {
			console.warn(error.message)
		}
	}

	useEffect(() => {
		getStatus()
	}, [])

	return { status, loading }
}
