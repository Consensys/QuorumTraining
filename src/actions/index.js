import * as constants from '../actionConstants'

export const updateConsensusSelection = (selectedConsensusType) => ({ type: constants.UPDATE_CONSENSUS, selectedConsensusType })
export const updateShowQuorumSubMenu = (show) => ({ type: constants.UPDATE_SHOW_QUORUM_SUBMENU, show })
