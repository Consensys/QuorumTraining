import { connect } from 'react-redux'
import { updateShowQuorumSubMenu } from '../actionCreators' 
import LeftMenuComponent from '../components/LeftMenu'

const mapStateToProps = (state) => ({
	showMenu: state.quorum.showMenu
})

const mapDispatchToProps = {
  updateShowQuorumSubMenu
}

const LeftMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftMenuComponent)

export default LeftMenu

