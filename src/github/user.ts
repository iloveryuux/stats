import { base_url } from '../utils'

const args = process.argv.slice(2)
const username = args[0]

const url = `${base_url}/users/${username}`

export const userData = async () => {
  const response = await fetch(url)
  const { id, name, followers, following, public_repos, location, company, email, bio  } = await response.json()
  return {
    id,
    name,
    followers,
    following,
    repos: public_repos,
    location,
    company,
    email,
    bio
  }
}