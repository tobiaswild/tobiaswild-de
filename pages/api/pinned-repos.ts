import { getPinnedRepos } from 'Lib/github-api'

export default async (_, res) => {
  const response = await getPinnedRepos()
  return res.status(200).json(response)
}
