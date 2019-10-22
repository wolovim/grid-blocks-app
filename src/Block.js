import React from 'react';
import Transaction from './Transaction'

function Block(props) {
  const { hash, transactions } = props.block

  return (
    <div>
      <div>hash: {hash}</div>
      <h3>Transactions</h3>
      {transactions.map(tx => <Transaction key={tx.hash} tx={tx} />)}
    </div>
  )
}

export default Block
