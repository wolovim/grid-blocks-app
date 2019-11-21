import React from 'react'
import Block from './Block'

function Blocks({ setBlockNumber, currentBlockNumber: number }) {
  return (
    <>
      <div className="block-wrapper">
        {number - 3 >= 0 && number !== null && (
          <Block
            classes="block previous-block p3"
            number={number - 3}
            setBlockNumber={setBlockNumber}
          />
        )}
        {number - 2 >= 0 && number !== null && (
          <Block
            classes="block previous-block p2"
            number={number - 2}
            setBlockNumber={setBlockNumber}
          />
        )}
        {number - 1 >= 0 && number !== null && (
          <Block
            classes="block previous-block p1"
            number={number - 1}
            setBlockNumber={setBlockNumber}
          />
        )}
        {number >= 0 && number !== null && (
          <Block
            current
            classes="block current-block"
            number={number}
            setBlockNumber={setBlockNumber}
          />
        )}
        {number + 1 >= 0 && number !== null && (
          <Block
            classes="block next-block n1"
            number={number + 1}
            setBlockNumber={setBlockNumber}
          />
        )}
        {number + 2 >= 0 && number !== null && (
          <Block
            classes="block next-block n2"
            number={number + 2}
            setBlockNumber={setBlockNumber}
          />
        )}
        {number + 3 >= 0 && number !== null && (
          <Block
            classes="block next-block n3"
            number={number + 3}
            setBlockNumber={setBlockNumber}
          />
        )}
      </div>
      <hr id="chain" color="#ddd" size={4} />
    </>
  )
}

export default Blocks
