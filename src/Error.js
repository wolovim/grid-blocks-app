import React from 'react'

function Error({ clearError, type }) {
  const ERRORS = {
    network: {
      title: <>Whoops! Unable to connect.</>,
      body: (
        <>
          This app is designed with{' '}
          <a
            href="https://grid.ethereum.org"
            target="_blank"
            rel="noopener noreferrer">
            Ethereum Grid
          </a>{' '}
          in mind.
          <br />
          Within Grid, is Geth running with GraphQL enabled?
        </>
      )
    },
    peers: {
      title: <>Oh no! Your node is lonely.</>,
      body: (
        <>
          Your node is having trouble finding peers to get the data it needs.
          <br />
          Give it more time, or a restart.
        </>
      )
    }
  }

  return (
    <div onClick={clearError} className="error-wrapper">
      <div className="error-title">{ERRORS[type].title}</div>
      <div className="error-suggestion">{ERRORS[type].body}</div>
    </div>
  )
}

export default Error
