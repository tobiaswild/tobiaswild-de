import Layout from 'Components/Layout'

function Error({ statusCode }) {
  return (
    <Layout scroll={false}>
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-2xl font-bold">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
