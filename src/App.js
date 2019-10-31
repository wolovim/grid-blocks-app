import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Error from './Error'
import Blocks from './Blocks'
import './App.css'

const BLOCK_QUERY = gql`
  query BLOCK_QUERY($blockNumber: Long) {
    ${`$blockNumber` ? `block(number: $blockNumber)` : `block`} {
      number
      hash
      parent {
        hash
      }
      transactionCount
      transactions {
        index
        hash
        value
        from { address }
        to { address }
        status
        gasUsed
      }
    }
  }
`

function App() {
  const [blockNumber, setBlockNumber] = useState()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(blockNumber || '')
  }, [blockNumber])

  const variables = blockNumber
    ? { blockNumber: `0x${blockNumber.toString(16)}` }
    : {}
  const { loading, error, data } = useQuery(BLOCK_QUERY, {
    variables,
    onCompleted: data => setBlockNumber(parseInt(data.block.number, 16))
  })

  if (loading) return <p>Loading...</p>
  if (error) return <Error error={error} />

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a block number"
        value={inputValue}
        onChange={e => setInputValue(Number(e.target.value))}
      />
      <button onClick={() => setBlockNumber(inputValue)}>Lookup block</button>
      <button onClick={() => setBlockNumber(null)}>Latest block</button>
      <Blocks setBlockNumber={setBlockNumber} currentBlock={data.block} />
    </div>
  )
}

export default App
