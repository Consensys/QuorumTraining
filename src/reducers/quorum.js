import * as constants from '../actionConstants'

const quorum = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_CONSENSUS:
      return {
        selectedConsensusType: action.selectedConsensusType,
        showMenu: state.show
      }
    case constants.UPDATE_SHOW_QUORUM_SUBMENU:
      return {
        selectedConsensusType: state.selectedConsensusType,
        showMenu: action.show
      }
    default:
			{
				if(!state){
					return {
            selectedConsensusType: 'QuorumChain',
            showMenu: false
          }
				} else {
					return state
				}
		}
	}
}

export default quorum
