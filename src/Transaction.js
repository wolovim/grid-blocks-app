import React from 'react'
import { Identicon } from 'ethereum-react-components'

function Transaction({ tx }) {
  const { index, value, from, to, status, gasUsed } = tx

  return (
    <div className="tx">
      <div className="tx-index">tx #{index + 1}</div>

      {/* TODO: directional, or contract creation if none */}
      <div className="data-field">
        <span className="title">from: </span>
        <span className="address value">
          <Identicon size="tiny" address={from.address} />
          {from.address.slice(0, 8)}...
        </span>
      </div>
      <div className="data-field">
        <span className="title">to: </span>
        <span className="address value">
          {to && <Identicon size="tiny" address={to.address} />}
          {to && to.address.slice(0, 8)}...
        </span>
      </div>

      <div className="data-field">
        <span className="title">value: </span>
        <span className="value">{parseInt(value, 16)}</span>
      </div>
      <div className="data-field">
        <span className="title">status: </span>
        <span className="value">
          {parseInt(status, 16) === 1 ? 'SUCCEEDED' : 'FAILED'}
        </span>
      </div>
      <div className="data-field">
        <span className="title">gas used: </span>
        <span className="value">{parseInt(gasUsed, 16)}</span>
      </div>
    </div>
  )
}

export default Transaction
