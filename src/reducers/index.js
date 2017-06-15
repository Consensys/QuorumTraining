import { combineReducers } from 'redux'
import currentUser from './currentUser'
import settings from './settings'
import { routerReducer as routing } from 'react-router-redux'

const springblockReducers = combineReducers({
	currentUser,
	settings,
  routing
})

export default springblockReducers
