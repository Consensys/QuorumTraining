import { connect } from 'react-redux'
import { updateShowQuorumSubMenu } from '../actionCreators' 
import QuorumSubMenuComponent from '../components/QuorumSubMenu'

const mapStateToProps = (state) => ({
	showMenu: state.quorum.showMenu
})

const mapDispatchToProps = {
  updateShowQuorumSubMenu
}

const QuorumSubMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuorumSubMenuComponent)

export default QuorumSubMenu

