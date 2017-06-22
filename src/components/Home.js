import React from 'react'
import PropTypes from 'prop-types'

const HomeComponent = ({currentUser, selectedBlockchain, updateBlockchainSelection}) => {

	return (
		<div>
      <div>
        Welcome to the Quorum training platform.  This platform will allow you to learn how Quorum works by:
        <ul>
          <li>Setting up a Quorum node</li>
          <li>Joining that node to a Quorum network</li>
          <li>Creating Accounts on the node</li>
          <li>Deploying contracts to the Quorum network</li>
          <li>Interacting with those contracts</li>
          <li>Deploying confidential contracts into Quorum constellations</li>
          <li>Interacting with those confidential contracts</li>
          <li>Viewing the status of the network</li>
        </ul>
      </div>
		</div>
	)
}

export default HomeComponent


