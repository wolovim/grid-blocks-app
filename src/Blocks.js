import React from 'react'
import Block from './Block'

function Blocks(props) {
  const { setBlockNumber, currentBlockNumber: number } = props

  return (
    <>
      <div className="block-wrapper">
        <Block
          classes="block previous-block p3"
          number={number - 3}
          setBlockNumber={setBlockNumber}
        />
        <Block
          classes="block previous-block p2"
          number={number - 2}
          setBlockNumber={setBlockNumber}
        />
        <Block
          classes="block previous-block p1"
          number={number - 1}
          setBlockNumber={setBlockNumber}
        />
        <Block
          classes="block current-block"
          number={number}
          setBlockNumber={setBlockNumber}
        />
        <Block
          classes="block next-block n1"
          number={number + 1}
          setBlockNumber={setBlockNumber}
        />
        <Block
          classes="block next-block n2"
          number={number + 2}
          setBlockNumber={setBlockNumber}
        />
        <Block
          classes="block next-block n3"
          number={number + 3}
          setBlockNumber={setBlockNumber}
        />
      </div>
      <hr id="chain" color="#ddd" size={4} />
    </>
  )
}

export default Blocks
