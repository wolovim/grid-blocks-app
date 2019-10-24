import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import Error from './Error'
import Blocks from './Blocks'
import './App.css';

const BLOCK_QUERY = gql`
  query BLOCK_QUERY($blockNumber: Long) {
    block(number: $blockNumber) {
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
  const [ blockNumber, setBlockNumber ] = useState(1514936)
  const { loading, error, data } = useQuery(BLOCK_QUERY, {
    variables: { blockNumber: `0x${blockNumber.toString(16)}` }
  });

  if (loading) return <p>Loading...</p>
  if (error) return <Error />

  return (
    <div className="App">
      <input value={blockNumber} onChange={e => setBlockNumber(Number(e.target.value))} />
      <Blocks setBlockNumber={setBlockNumber} block={data.block} />
    </div>
  )
}

export default App;

// TODO features:
// - link to latest block
// √ link to next block
// √ link to previous block
// √ link to arbitrary
// √ visually display linkage between blocks
// √ show parent hash
// √ highlight link between hash + parent hash
// - animate moving between blocks?
// - toggle hex on and off (default: off)
// √ dont show side blocks if at the end or beginning of the chain
// - make blocks look more blocky
// - show tx types, e.g. contract creation (e.g. 1514927)
// - handle block numbers too large
