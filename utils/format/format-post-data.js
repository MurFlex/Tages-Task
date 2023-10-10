import { TITLE_CROP_RANGE } from '../../constants.js'
import { getComments } from '../../posts/comments/comments.service.js'

/**
 * Formatting posts to the right form
 * @param {Boolean} isNeedComments - Describes if we need to add comments to posts
 * @param {Object} posts - App posts
 * @returns {Object} User posts
 */
export const formatPosts = async (isNeedComments, posts) => {
	for (const [index, post] of Object.entries(posts)) {
		posts[index] = formatPostData(post)

		if (isNeedComments) {
			posts[index] = { ...post, comments: await getComments(post) }
		}
	}

	return posts
}

const formatPostData = ({ id, title, body }) => {
	const post = {
		id,
		title,
		title_crop: `${title.slice(TITLE_CROP_RANGE.from, TITLE_CROP_RANGE.to)}...`,
		body,
	}

	return post
}
