import React from 'react'
import Transaction from './Transaction'

function Blocks(props) {
  const { setBlockNumber, currentBlock } = props
  const { number, hash, parent, transactions, transactionCount } = currentBlock

  return (
    <>
      <div className="block-wrapper">
        {parseInt(number, 16) - 3 >= 0 && (
          <div
            className="block previous-block p3"
            onClick={() => setBlockNumber(parseInt(number, 16) - 3)}>
            <div className="block-number">{parseInt(number, 16) - 3}</div>
          </div>
        )}
        {parseInt(number, 16) - 2 >= 0 && (
          <div
            className="block previous-block p2"
            onClick={() => setBlockNumber(parseInt(number, 16) - 2)}>
            <div className="block-number">{parseInt(number, 16) - 2}</div>
          </div>
        )}
        {parseInt(number, 16) - 1 >= 0 && (
          <div
            className="block previous-block p1"
            onClick={() => setBlockNumber(parseInt(number, 16) - 1)}>
            <div className="block-number">{parseInt(number, 16) - 1}</div>
            <div className="data-field">
              <span className="title">hash: </span>
              <span className="value parent-hash">
                {parent ? `${parent.hash.slice(0, 8)}...` : 'N/A'}
              </span>
            </div>
          </div>
        )}

        <div className="block current-block">
          <div className="block-number">{parseInt(number, 16)}</div>

          <div className="data-field">
            <span className="title">parent hash: </span>
            <span className="value parent-hash">
              {parent ? `${parent.hash.slice(0, 8)}...` : 'N/A - GENESIS'}
            </span>
          </div>

          <div className="data-field">
            <span className="title">hash: </span>
            <span className="value current-hash">{hash.slice(0, 8)}...</span>
          </div>

          <div className="data-field">
            <span className="tx-title">Transaction count: </span>
            <span className="value">{transactionCount}</span>
          </div>
          {transactions.map(tx => (
            <Transaction key={tx.hash} tx={tx} />
          ))}
        </div>

        <div
          className="block next-block n3"
          onClick={() => setBlockNumber(parseInt(number, 16) + 3)}>
          <div className="block-number">{parseInt(number, 16) + 3}</div>
        </div>
        <div
          className="block next-block n2"
          onClick={() => setBlockNumber(parseInt(number, 16) + 2)}>
          <div className="block-number">{parseInt(number, 16) + 2}</div>
        </div>
        <div
          className="block next-block n1"
          onClick={() => setBlockNumber(parseInt(number, 16) + 1)}>
          <div className="block-number">{parseInt(number, 16) + 1}</div>
          <div className="data-field">
            <span className="title">parent hash: </span>
            <span className="value current-hash">
              {`${hash.slice(0, 8)}...`}
            </span>
          </div>
        </div>
      </div>
      <hr id="chain" color="#ddd" size={4} />
    </>
  )
}

export default Blocks
