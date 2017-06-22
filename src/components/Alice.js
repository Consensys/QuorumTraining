import React from 'react'
import PropTypes from 'prop-types'

const AliceComponent = ({address, balance}) => {

	return (
		<div>
      <div>Alice</div>
      <div>Address: {address}</div>
      <div>Balance: {balance}</div>
		</div>
	)
}

export default AliceComponent

