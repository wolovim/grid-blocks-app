import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import Block from './Block'
import './App.css';

const BLOCK_QUERY = gql`
  query {
    block(number: 1514936) {
      number
      hash
      parent {
        hash
      }
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
  const { loading, error, data } = useQuery(BLOCK_QUERY);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! Is Geth running with Graphql enabled?</p>

  return (
    <div className="App">
      <Block block={data.block} />
    </div>
  )
}

export default App;

// TODO features:
// - link to current block
// - link to next block
// - link to previous block
// - link to previous block
// √ visually display linkage between blocks
// - show parent hash, pointing back to parent
// - animate moving between blocks?
