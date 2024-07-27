import { base_url } from '../../utils'

export const userData = async (username: string) => {
	const url = `${base_url}/users/${username}`
	const response = await fetch(url)
	
	if(!response.ok) {
		console.error('Failed to fetch user')
		process.exit(1)
	}
	const {
		id,
		name,
		followers,
		following,
		public_repos,
		location,
		company,
		email,
		bio,
	} = await response.json()
	return {
		id,
		name,
		followers,
		following,
		repos: public_repos,
		location,
		company,
		email,
		bio,
	}
}
