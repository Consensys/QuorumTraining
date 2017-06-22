import React from 'react'
import PropTypes from 'prop-types'

const QuorumJoinComponent = ({currentUser, selectedConsensusType, updateConsensusType}) => {

	return (
		<div>
      <div>
        <h3>Join an existing network</h3>
        <div>
          To join an existing Quorum network specify the ip address of one of the managing nodes.  The details of the network will then be communicated to this node via Whisper and you will be able to join the network using the block maker/block voter options you specify below.  Please note that when you click join network, any block history stored on this node will be deleted and this node will have to sync with the rest of the network.  If you would like to re-connect to a network that you were previously connected to, select the reconnect to a network menu item
        </div>
      </div>
		</div>
	)
}

export default QuorumJoinComponent


