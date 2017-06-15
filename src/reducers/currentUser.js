import * as constants from '../actionConstants'

const currentUser = (state, action) => {
  switch (action.type) {
    default:
			{
				if(!state){
					return {
						currentUser: {
							username: '',
							password: '',
							isLoggedIn: false
							}
					}
				} else {
					return state
				}
		}
	}
}

export default currentUser
