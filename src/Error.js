import React from 'react'

function Error(props) {
  return (
    <div className="error-wrapper">
      <div className="error-title">Whoops! Unable to connect.</div>
      <div className="error-suggestion">
        This app is designed with <a href="https://grid.ethereum.org" target="_blank" rel="noopener noreferrer">Ethereum Grid</a> in mind;<br/>
        Within Grid, is Geth running with GraphQL enabled?
      </div>
    </div>
  )
}

export default Error
