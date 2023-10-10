/**
 * Formatting address to the right form
 * @param {Object} address - Object with users address properties
 * @param {string} [address.city] - Name of city where user lives
 * @param {string} [address.street] - Name of street where user lives
 * @param {string} [address.suite] - Name of suite where user lives
 * @returns {string}
 */
export const formatAddress = ({ city, street, suite }) => {
	const address = `${city} ${street} ${suite}`

	return address
}
