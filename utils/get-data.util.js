import { SERVER_URL } from '../constants.js'

/**
 * Sends a GET request to the server
 * @param {string} endpoint - Endpoint where to send request
 * @returns {Object} Data from request
 */
export const getData = async endpoint => {
	const baseUrl = SERVER_URL + endpoint

	try {
		const response = await fetch(baseUrl)
		if (!response.ok) return response.statusText

		const data = await response.json()

		if (typeof data === 'string') throw new Error('Bad response')

		return data
	} catch (error) {
		throw new Error(error)
	}
}
