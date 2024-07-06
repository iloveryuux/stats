interface UserData {
	id: number
	name: string
	followers: number
	following: number
	repos: number
	location: string | null
	company: string | null
	email: string | null
	bio: string | null
}

interface RepoData {
	name: string
	description: string
	stars: number
	forks: number
}
