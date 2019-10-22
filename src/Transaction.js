import React from 'react';

function Transaction(props) {
  const { hash, value, from, to, status, gasUsed } = props.tx

  return (
    <div>
      <hr/>
      <div>hash: {hash.slice(0, 8)}...</div>
      <div>value: {value}</div>
      <div>from: {from.address.slice(0, 8)}...</div>
      <div>to: {to && to.address.slice(0, 8)}...</div>
      <div>status: {status}</div>
      <div>gasUsed: {gasUsed}</div>
    </div>
  )
}

export default Transaction
