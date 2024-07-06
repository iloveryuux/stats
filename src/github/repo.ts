import { base_url, truncateText } from '../utils'
const args = process.argv.slice(2)
const username = args[0]
const repo = args[1]

const url = `${base_url}/repos/${username}/${repo}`

export const repoData = async () => {
	const response = await fetch(url)
	const { name, description, stargazers_count, forks_count } =
		await response.json()
	return {
		name,
		description: truncateText(description),
		' stars': stargazers_count,
		' forks': forks_count,
	}
}
