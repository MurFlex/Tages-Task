import { USER_WITH_COMMENTS } from '../constants.js'

/**
 * Checks if we need to get comments to user`s posts
 * @param {Object} user - Object that contains user data
 * @param {name} user.name - Name of user
 * @returns {boolean}
 */
export const checkUserForComments = ({ name }) => {
	const isCommentsNeed = name === USER_WITH_COMMENTS

	return isCommentsNeed
}
