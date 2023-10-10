import { formatAddress } from './format-address.js'

/**
 * Formatting user data to the right form
 * @param {Object} user - Object with user data
 * @param {string} [user.id] - User id
 * @param {string} [user.name] - User name
 * @param {string} [user.email] - User email
 * @param {string} [user.address] - User address
 * @param {string} [user.website] - User website
 * @param {string} [user.company] - User company
 * @returns {Object} Formatted post
 */
export const formatUserData = async ({
	id,
	name,
	email,
	address,
	website,
	company,
}) => {
	const body = {
		id,
		name,
		email,
		address: formatAddress(address),
		website: `https://${website}`,
		company: company.name,
		posts: null,
	}

	return body
}
