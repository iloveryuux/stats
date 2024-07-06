import Table from 'cli-table3'
import { truncateText } from './utils'

const args = process.argv.slice(2)

if (args.length < 2) {
	console.error(`[-] Use: <username> <repo>`)
	process.exit(1)
}

const userGithub = args[0]
const repo = args[1]

const base_url = `https://api.github.com/repos/${userGithub}/${repo}`
const response = await fetch(base_url)

const { name, description, stargazers_count, forks_count } =
	await response.json()

const table = new Table({
	head: ['Name', 'Description', ' Stars', ' Forks'],
	style: {
		head: ['cyan'],
	},
})

table.push([
	name,
	truncateText(description || 'No description available'),
	stargazers_count,
	forks_count,
])

console.log(table.toString())
