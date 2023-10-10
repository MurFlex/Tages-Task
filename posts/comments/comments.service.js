import { ENDPOINTS } from '../../constants.js'
import { getData } from '../../utils/get-data.util.js'

/**
 * Sending GET request to get comments for post by id
 * @param {Object} post
 * @param {String} [post.id] - Post id
 * @returns
 */
export const getComments = async ({ id }) => {
	var comments
	const endpoint = `${ENDPOINTS.posts}/${id}/comments`

	await getData(endpoint).then(data => {
		comments = data.map(comment => comment.body)
	})

	return comments
}
