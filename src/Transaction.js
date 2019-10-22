import React from 'react';

function Transaction(props) {
  const { hash, value, from, to, status, gasUsed } = props.tx

  return (
    <div>
      <hr/>
      <div>hash: {hash}</div>
      <div>value: {value}</div>
      <div>from: {from.address}</div>
      <div>to: {to && to.address}</div>
      <div>status: {status}</div>
      <div>gasUsed: {gasUsed}</div>
    </div>
  )
}

export default Transaction
