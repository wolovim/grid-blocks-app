import React, { useEffect, useState } from 'react'
import { withApollo } from 'react-apollo'
import Blocks from './Blocks'
import './App.css'
import { LATEST_BLOCK_QUERY } from './queries'

function App({ client }) {
  const [blockNumber, setBlockNumber] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (blockNumber || blockNumber === 0) {
      setInputValue(blockNumber)
    } else {
      client.query({ query: LATEST_BLOCK_QUERY }).then(response => {
        if (response.data) {
          setBlockNumber(parseInt(response.data.block.number, 16))
        }
      })
    }
  }, [client, blockNumber])

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
    </div>
  )
}

export default withApollo(App)
