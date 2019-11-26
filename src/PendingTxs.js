import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_PENDING_QUERY } from './queries'
import Transaction from './Transaction'

function PendingTxs() {
  const { loading, error, data } = useQuery(GET_PENDING_QUERY)
  console.log('∆∆∆ data', data)
  console.log('∆∆∆ error', error)

  if (loading) return <span>Loading!</span>
  if (error) return <span>Whoops! Something went wrong.</span>

  const { transactionCount, transactions } = data.pending

  return (
    <div className="pending-page">
      <div className="data-field">
        <span className="tx-title">Pending Transactions: </span>
        <span className="value">{transactionCount}</span>
      </div>

      {transactions.map(tx => (
        <Transaction key={tx.hash} tx={tx} />
      ))}

      {transactions.length === 0 && (
        <div className="pending-page__empty">
          <span className="pending-page__empty-title">Note: </span>
          You can expect <b>testnets</b> to have no pending transactions.
          <br />
          On <b>Mainnet</b>, this typically means Geth hasn't finished
          downloading the blockchain data yet.
        </div>
      )}
    </div>
  )
}

export default PendingTxs
