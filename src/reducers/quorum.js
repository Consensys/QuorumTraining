import * as constants from '../actionConstants'

const quorum = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_CONSENSUS:
      return {
        selectedConsensusType: action.selectedConsensusType
      }
    default:
			{
				if(!state){
					return {
            selectedConsensusType: 'QuorumChain'
          }
				} else {
					return state
				}
		}
	}
}

export default quorum
