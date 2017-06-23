import * as actions from '../actions'

export function updateConsensusSelection(selectedConsensusType) {
  return function(dispatch) {
    dispatch(actions.updateConsensusSelection(selectedConsensusType))
  }
}

export function updateShowQuorumSubMenu(show) {
  return function(dispatch) {
    dispatch(actions.updateShowQuorumSubMenu(show))
  }
}

