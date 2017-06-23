import { connect } from 'react-redux'
import { updateConsensusType } from '../actionCreators' 
import QuorumReconnectComponent from '../components/QuorumReconnect'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
  selectedConsensusType: state.quorum.selectedConsensusType
})

const mapDispatchToProps = {
  updateConsensusType
}

const QuorumReconnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuorumReconnectComponent)

export default QuorumReconnect

