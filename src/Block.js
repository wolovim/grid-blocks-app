import React from 'react';
import Transaction from './Transaction'

function Block(props) {
  const { number, hash, parent, transactions } = props.block

  return (
    <>
      <div className="block-wrapper">
        <div className="block previous-block p3"></div>
        <div className="block previous-block p2"></div>
        <div className="block previous-block p1">
          <div>block number: {number.slice(0, 8)}...-1</div>
          <div>hash: {parent.hash.slice(0, 8)}...</div>
        </div>

        <div className="block current-block">
          <div>block number: {number.slice(0, 8)}...</div>
          <div>hash: {hash.slice(0, 8)}...</div>
          <div>parent hash: {parent.hash.slice(0, 8)}...</div>
          <h4>Transactions</h4>
          {transactions.map(tx => <Transaction key={tx.hash} tx={tx} />)}
        </div>

        <div className="block next-block n3"></div>
        <div className="block next-block n2"></div>
        <div className="block next-block n1"></div>
      </div>
      <hr id="chain" color="#ddd" size={4} />
    </>
  )
}

export default Block
