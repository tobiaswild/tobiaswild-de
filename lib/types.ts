export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type PinnedRepos = [PinnedRepo]

export type PinnedRepo = {
  name: string
  description: string
  url: URL
  homepageUrl: URL
  openGraphImageUrl: URL
}

export type UserInfo = {
  avatarUrl: URL
  bio: string
  login: string
  name: string
  websiteUrl: URL
  followers: {
    totalCount: number
  }
}
