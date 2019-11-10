import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_BLOCK_QUERY } from './queries'
import Transaction from './Transaction'
import LoadingBlock from './LoadingBlock'

function Block(props) {
  const { current, setBlockNumber, classes, number } = props

  const { loading, error, data } = useQuery(GET_BLOCK_QUERY, {
    variables: { blockNumber: `0x${number && number.toString(16)}` }
  })

  if (loading) return <LoadingBlock classes={classes} />
  if (error) return null
  if (number === null || number === undefined) return null

  const { hash, transactionCount, transactions, parent } = data.block

  return (
    <div className={classes} onClick={() => setBlockNumber(number)}>
      <div className="block-number">{number}</div>
      <div className="data-field">
        <span className="title">hash: </span>
        <span className="value hash">{hash.slice(0, 8)}...</span>
      </div>
      {parent && (
        <div className="data-field">
          <span className="title">parent hash: </span>
          <span className="value parent-hash">
            {parent.hash.slice(0, 8)}...
          </span>
        </div>
      )}
      <div className="data-field">
        <span className="tx-title">Tx count: </span>
        <span className="value">{transactionCount}</span>
      </div>
      {current && transactions.map(tx => <Transaction key={tx.hash} tx={tx} />)}
    </div>
  )
}

export default Block
