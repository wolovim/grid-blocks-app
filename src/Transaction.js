import React from 'react';

function Transaction(props) {
  const { index, value, from, to, status, gasUsed } = props.tx

  return (
    <div className="tx">
      <div className="tx-index">tx #{index + 1}</div>

      {/* TODO: directional, or contract creation if none */}
      <div className="data-field">
        <span className="title">from: </span>
        <span className="value">{from.address.slice(0, 8)}...</span>
      </div>
      <div className="data-field">
        <span className="title">to: </span>
        <span className="value">{to && to.address.slice(0, 8)}...</span>
      </div>

      <div className="data-field">
        <span className="title">value: </span>
        <span className="value">{parseInt(value, 16)}</span>
      </div>
      <div className="data-field">
        <span className="title">status: </span>
        <span className="value">{parseInt(status, 16) === 1 ? 'SUCCEEDED' : 'FAILED'}</span>
      </div>
      <div className="data-field">
        <span className="title">gas used: </span>
        <span className="value">{parseInt(gasUsed, 16)}</span>
      </div>
    </div>
  )
}

export default Transaction
