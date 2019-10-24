import React from 'react'

const ERRORS = {
  generic: {
    title: <>Whoops! Something went wrong.</>,
    suggestion: (
      <>
        This error is unaccounted for. Check the logs and file an issue, please!
      </>
    )
  },
  network: {
    title: <>Whoops! Unable to connect.</>,
    suggestion: (
      <>
        This app is designed with{' '}
        <a
          href="https://grid.ethereum.org"
          target="_blank"
          rel="noopener noreferrer">
          Ethereum Grid
        </a>{' '}
        in mind;
        <br />
        Within Grid, is Geth running with GraphQL enabled?
      </>
    )
  },
  tooLarge: {
    title: <>Whoops! That block number hasn't occurred yet.</>,
    suggestion: (
      <>
        Either this block hasn't been mined yet or your node isn't synced enough
        to be aware of it. Try using the "Latest block" button to get the most
        recent available block.
      </>
    )
  },
  peers: {
    title: <>Oh no! Your node is lonely.</>,
    suggestion: (
      <>
        Your node is having trouble finding peers to get the data it needs. Give
        it more time, or a restart.
      </>
    )
  }
}

function Error(props) {
  const { message } = props.error

  let errorType = 'generic'
  if (message.includes('NetworkError')) errorType = 'network'
  if (message.includes('no trusted canonical hash trie')) errorType = 'tooLarge'
  if (message.includes('no suitable peers')) errorType = 'peers'

  return (
    <div className="error-wrapper">
      <div className="error-title">{ERRORS[errorType].title}</div>
      <div className="error-suggestion">{ERRORS[errorType].suggestion}</div>
    </div>
  )
}

export default Error
