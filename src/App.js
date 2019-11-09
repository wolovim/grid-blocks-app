import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Error from './Error'
import Blocks from './Blocks'
import './App.css'
import { LATEST_BLOCK_QUERY, BLOCK_RANGE_QUERY } from './queries'

function App() {
  const [blockNumber, setBlockNumber] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(blockNumber || '')
  }, [blockNumber])

  let query, variables, type
  if (blockNumber === undefined || blockNumber === null) {
    type = 'latest'
    query = LATEST_BLOCK_QUERY
    variables = {}
  } else if (blockNumber === 0) {
    type = 'genesis'
    query = BLOCK_RANGE_QUERY
    variables = { blockNumberLower: '0x0', blockNumberUpper: '0x1' }
  } else {
    type = 'range'
    query = BLOCK_RANGE_QUERY
    variables = {
      blockNumberLower: `0x${(blockNumber - 1).toString(16)}`,
      blockNumberUpper: `0x${(blockNumber + 1).toString(16)}`
    }
  }

  const { loading, error, data } = useQuery(query, { variables })
  console.log('∆∆∆ data', data)

  if (loading) return <p>Loading...</p>
  if (error) return <Error error={error} />

  let previousBlock, currentBlock, nextBlock
  if (type === 'latest') {
    currentBlock = data.block
    nextBlock = null
  } else if (type === 'genesis') {
    previousBlock = null
    currentBlock = data.blocks[0]
    nextBlock = data.blocks[1]
  } else {
    previousBlock = data.blocks[0]
    currentBlock = data.blocks[1]
    nextBlock = data.blocks[2]
  }
  // setBlockNumber(parseInt(currentBlock.number, 16))

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
      <Blocks
        setBlockNumber={setBlockNumber}
        previousBlock={previousBlock}
        currentBlock={currentBlock}
        nextBlock={nextBlock}
        latest={type === 'latest'}
      />
    </div>
  )
}

export default App
