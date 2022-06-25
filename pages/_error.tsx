function Error({ statusCode }) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oh nein :&#40;</h1>
          <p className="py-6">
            {statusCode
              ? `Auf dem Server ist ein Fehler ${statusCode} aufgetreten`
              : 'Auf dem Client ist ein Fehler aufgetreten'}
          </p>
          <button className="btn btn-primary">Zurück zur Startseite</button>
        </div>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
