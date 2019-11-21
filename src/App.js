import React, { useEffect, useState } from 'react'
import { withApollo } from 'react-apollo'
import Error from './Error'
import Blocks from './Blocks'
import './App.css'
import { LATEST_BLOCK_QUERY } from './queries'

function App({ client }) {
  const [blockNumber, setBlockNumber] = useState(0)
  const [inputValue, setInputValue] = useState('0')
  const [errorType, setErrorType] = useState(null)

  // Send a dummy query on mount to see if connected to GraphQL server
  useEffect(() => {
    client.query({ query: LATEST_BLOCK_QUERY }).catch(e => {
      if (e.toString().includes('Network error')) setErrorType('network')
    })
  }, [client])

  // Fetching the latest block requires a query with a `null` blockNumber
  useEffect(() => {
    if (blockNumber || blockNumber === 0) {
      setInputValue(blockNumber)
    } else {
      client
        .query({ query: LATEST_BLOCK_QUERY })
        .then(response => {
          if (response.data) {
            let blockNumber = parseInt(response.data.block.number, 16)
            if (blockNumber >= 0) setBlockNumber(blockNumber)
          }
        })
        .catch(e => {
          if (e.toString().includes('peers')) setErrorType('peers')
        })
    }
  }, [client, blockNumber, errorType])

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder="Enter a block number"
          value={inputValue}
          onChange={e => setInputValue(Number(e.target.value))}
        />
        <button onClick={() => setBlockNumber(inputValue)}>Lookup block</button>
        <button onClick={() => setBlockNumber(null)}>Latest block</button>
      </div>
      <Blocks
        setBlockNumber={setBlockNumber}
        currentBlockNumber={blockNumber}
      />
      {errorType && (
        <Error type={errorType} clearError={() => setErrorType(null)} />
      )}
    </div>
  )
}

export default withApollo(App)
