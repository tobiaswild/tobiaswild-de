import { getUserInfo } from 'Lib/github-api'

export default async (_, res) => {
  const response = await getUserInfo()
  return res.status(200).json(response)
}
