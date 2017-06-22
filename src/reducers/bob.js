import * as constants from '../actionConstants'

const settings = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_BOB_BALANCE:
      {
        return action.bobBalance
      }
    default:
			{
				if(!state){
					return {
            address: '0x8376c64532d293e5e7221849febd2024ca55cce9',
            balance: 0
          }
				} else {
					return state
				}
		}
	}
}

export default settings
