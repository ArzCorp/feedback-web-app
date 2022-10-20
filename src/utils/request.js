import { URL, HEADERS } from './constants'

export const request = async ({ endpoint, options = {} } = {}) => {
	const CURRENT_URL = `${URL}/${endpoint}/`

	const CURRENT_OPTIONS = {
		...options,
	}

	const response = await fetch(CURRENT_URL, CURRENT_OPTIONS)
	const data = await response.json()
	return data
}
