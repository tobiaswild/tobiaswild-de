import { getPinnedRepos } from 'Lib/github'

export default async (_, res) => {
  const response = await getPinnedRepos()
  return res.status(200).json(response)
}
