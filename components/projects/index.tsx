import Card from 'Components/Card'
import Grid from 'Components/Grid'
import fetcher from 'Lib/fetcher'
import { PinnedRepos } from 'Lib/types'
import useSWR from 'swr'
import GithubLink from './GithubLink'
import WebsiteLink from './WebsiteLink'

export default function Projects() {
  const { data } = useSWR<PinnedRepos>('/api/pinned-repos', fetcher)

  return (
    <section id="projects">
      <h2>Projekte</h2>
      <Grid>
        {data?.map((item) => (
          <Card
            image={item.openGraphImageUrl}
            title={item.name}
            description={item.description}
            key={item.name}>
            <GithubLink url={item.url} name={item.name} />
            <WebsiteLink url={item.homepageUrl} name={item.name} />
          </Card>
        ))}
      </Grid>
    </section>
  )
}
