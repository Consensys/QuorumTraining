import * as actions from '../actions'

export function updateBlockchainSelection(selectedBlockchain) {
  return function(dispatch) {
    dispatch(actions.updateBlockchainSelection(selectedBlockchain));
  }
}

