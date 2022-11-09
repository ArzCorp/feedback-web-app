import { URL, HEADERS } from './constants'

export const request = async ({ endpoint, method, body }) => {
	console.log(body, method, endpoint)
	const CURRENT_URL = `${URL}/${endpoint}/`

	const response = await fetch(CURRENT_URL, {
		content: 'application/json',
		headers: {
			...HEADERS,
		},
		body: JSON.stringify(body),
		method,
	})
	const data = await response.json()
	return data
}
