import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const usePageLoaded = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const { isReady } = useRouter()

	useEffect(() => {
		if (isReady) {
			return setIsLoaded(true)
		}
	}, [isReady])

	return { isLoaded }
}
