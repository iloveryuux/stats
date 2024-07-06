import { displayTable } from './utils'
import { repoData } from './github/repo'

const args = process.argv.slice(2)

if (args.length < 2) {
	console.error('[-] Use: <username> <repo>')
	process.exit(1)
}

const data = await repoData()
displayTable(data)
