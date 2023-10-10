import { ENDPOINTS } from '../constants.js'
import { formatPosts } from '../utils/format/format-post-data.js'
import { formatUserData } from '../utils/format/format-user-data.js'
import { getData } from '../utils/get-data.util.js'
import { checkUserForComments } from './check-user-for-comments.js'

/**
 * Getting data from the server and formatting it
 * @param {Object} posts
 * @returns {Object} users
 */
export const getUsers = async posts => {
	let users

	await getData(ENDPOINTS.users).then(data => {
		users = data
	})

	for (const [key, user] of Object.entries(users)) {
		const userPosts = posts.filter(post => post.userId === user.id)
		const isNeedComments = checkUserForComments(user)

		users[key] = await formatUserData(user)
		users[key].posts = await formatPosts(isNeedComments, userPosts)
	}

	return users
}
