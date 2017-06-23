import React from 'react'
import PropTypes from 'prop-types'

const QuorumReconnectComponent = ({currentUser, selectedConsensusType, updateConsensusType}) => {

	return (
		<div>
      <div>
        <h3>Reconnect to an existing network</h3>
        <div>
          To reconnect to an existing Quorum network that you were previously connected to, specify the ip address of one of the managing nodes.  The details of the network will then be communicated to this node via Whisper and you will be able to join the network using the block maker/block voter options you specify below.  
        </div>
      </div>
		</div>
	)
}

export default QuorumReconnectComponent


