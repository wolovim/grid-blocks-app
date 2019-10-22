import React from 'react';
import Transaction from './Transaction'

function Block(props) {
  const { hash, transactions } = props.block

  return (
    <div className="block-wrapper">
      <div className="block previous-block p3"></div>
      <div className="block previous-block p2"></div>
      <div className="block previous-block p1"></div>

      <div className="block current-block">
        <div>hash: {hash.slice(0, 8)}...</div>
        <h4>Transactions</h4>
        {transactions.map(tx => <Transaction key={tx.hash} tx={tx} />)}
      </div>

      <div className="block next-block n1"></div>
      <div className="block next-block n2"></div>
      <div className="block next-block n3"></div>
    </div>
  )
}

export default Block
