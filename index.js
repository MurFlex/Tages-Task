import { getPosts } from './posts/posts.service.js'
import { getUsers } from './users/users.service.js'

const fetchData = async () => {
	const posts = await getPosts()
	const users = await getUsers(posts)

	console.log(users)
}

fetchData()
