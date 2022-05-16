import Layout from 'Components/Layout'

export default function Custom500() {
  return (
    <Layout scroll={false}>
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-2xl font-bold">500 - Server-side error occurred</p>
      </div>
    </Layout>
  )
}
