import { combineReducers } from 'redux'
import currentUser from './currentUser'
import settings from './settings'
import quorum from './quorum'
import { routerReducer as routing } from 'react-router-redux'

const quorumTrainingReducers = combineReducers({
	currentUser,
  quorum,
	settings,
  routing
})

export default quorumTrainingReducers
