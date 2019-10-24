import React from 'react'

const ERRORS = {
  generic: {
    title: <span>Whoops! Something went wrong.</span>,
    suggestion: <span>This error is unaccounted for. Check the logs and file an issue, please!</span>
  },
  network: {
    title: <span>Whoops! Unable to connect.</span>,
    suggestion: <span>This app is designed with <a href="https://grid.ethereum.org" target="_blank" rel="noopener noreferrer">Ethereum Grid</a> in mind;<br/>
        Within Grid, is Geth running with GraphQL enabled?</span>
  },
  tooLarge: {
    title: <span>Whoops! That block number hasn't occurred yet.</span>,
    suggestion: <span>Refresh, then try using the "Latest block" button to get the most recent block.</span>
  }
}

function Error(props) {
  const { message } = props.error

  let errorType = 'generic'
  if (message.includes('NetworkError')) errorType = 'network'
  if (message.includes('no trusted canonical hash trie')) errorType = 'tooLarge'

  return (
    <div className="error-wrapper">
      <div className="error-title">{ERRORS[errorType].title}</div>
      <div className="error-suggestion">{ERRORS[errorType].suggestion}</div>
    </div>
  )
}

export default Error
