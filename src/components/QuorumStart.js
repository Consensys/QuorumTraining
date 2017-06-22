import React from 'react'
import PropTypes from 'prop-types'

const QuorumStartComponent = ({currentUser, selectedConsensusType, updateConsensusType}) => {

	return (
		<div>
      <div>
        <h3>Start a Quorum Network</h3>
        <div>
          Please select the consensus type from the below drop down and configure the network based on the options below that in order to start a new Quorum network.  This should only be done if this is the very first node.  If you would like to join an existing network, please select "Join a network" from the Quorum menu
        </div>
      </div>
		</div>
	)
}

export default QuorumStartComponent


