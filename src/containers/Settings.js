import { connect } from 'react-redux'
import SettingsComponent from '../components/Settings'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

const Settings = connect(
  mapStateToProps
)(SettingsComponent)

export default Settings

