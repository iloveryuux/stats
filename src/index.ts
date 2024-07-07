import { displayTable } from './utils'
import { userData, repoData } from './services/github'

const args = process.argv.slice(2)

if (args.length < 1 || args.length > 2) {
	console.error('[-] Usage: <username> [repo]')
	process.exit(1)
}

const actions: { [key: number]: () => Promise<UserData | RepoData> } = {
	1: async () => await userData(args[0]),
	2: async () => await repoData(args[0], args[1]),
}

const data = await actions[args.length]()
displayTable(data)
