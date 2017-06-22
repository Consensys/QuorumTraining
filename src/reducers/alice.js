import * as constants from '../actionConstants'

const settings = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_ALICE_BALANCE:
      {
        return action.aliceBalance
      }
    default:
			{
				if(!state){
					return {
            address: '0xa9dde8b4cda4bdbf61bd4eaac022e0de5c39468a',
            balance: 0
          }
				} else {
					return state
				}
		}
	}
}

export default settings
