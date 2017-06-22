import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ContentSend from 'material-ui/svg-icons/content/send'

const BobComponent = ({address, balance, sendTokensToAlice}) => {
  let amountValue = null

	return (
		<div>
      <div>Bob</div>
      <div>Address: {address}</div>
      <div>Balance: {balance}</div>
		</div>
	)
}

export default BobComponent

