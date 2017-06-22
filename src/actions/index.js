import * as constants from '../actionConstants'

export const updateBlockchainSelection = (selectedBlockchain) => ({ type: constants.UPDATE_BLOCKCHAIN, selectedBlockchain })
export const updateBobBalance = (bobBalance) => ({ type: constants.UPDATE_BOB_BALANCE, bobBalance })
export const updateAliceBalance = (aliceBalance) => ({ type: constants.UPDATE_ALICE_BALANCE, aliceBalance })
