import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import Error from './Error'
import Blocks from './Blocks'
import './App.css';

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
`;

function App() {
  const [ inputValue, setInputValue ] = useState(1514936)
  const [ blockNumber, setBlockNumber ] = useState(1514936)
  const variables = blockNumber ? { blockNumber: `0x${blockNumber.toString(16)}` } : {}
  const { loading, error, data } = useQuery(BLOCK_QUERY, { variables });

  if (loading) return <p>Loading...</p>
  if (error) return <Error error={error} />

  return (
    <div className="App">
      <input value={inputValue} onChange={e => setInputValue(Number(e.target.value))} />
      <button onClick={() => setBlockNumber(inputValue)}>Lookup block</button>
      <button onClick={() => setBlockNumber()}>Latest block</button>
      <Blocks setBlockNumber={setBlockNumber} block={data.block} />
    </div>
  )
}

export default App;
