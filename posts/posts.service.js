import { ENDPOINTS } from '../constants.js'
import { getData } from '../utils/get-data.util.js'

/**
 * Getting posts from server
 * @returns {Object} All posts
 */
export const getPosts = async () => {
	let posts

	await getData(ENDPOINTS.posts).then(data => {
		posts = data
	})

	return posts
}
