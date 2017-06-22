import { combineReducers } from 'redux'
import currentUser from './currentUser'
import settings from './settings'
import bob from './bob'
import alice from './alice'
import { routerReducer as routing } from 'react-router-redux'

const springblockReducers = combineReducers({
	currentUser,
	settings,
	bob,
	alice,
  routing
})

export default springblockReducers
