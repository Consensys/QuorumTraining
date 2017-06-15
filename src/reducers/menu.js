import * as constants from '../actionConstants'

const settings = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_BLOCKCHAIN:
      return {
        selectedBlockchain: action.selectedBlockchain
      }
    default:
			{
				if(!state){
					return {
            selectedBlockchain: 'Ethereum (Quorum)'
          }
				} else {
					return state
				}
		}
	}
}

export default settings
