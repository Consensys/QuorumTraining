import { connect } from 'react-redux'
import { updateConsensusType } from '../actionCreators' 
import QuorumStartComponent from '../components/QuorumStart'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
  selectedConsensusType: state.quorum.selectedConsensusType
})

const mapDispatchToProps = {
  updateConsensusType
}

const QuorumStart = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuorumStartComponent)

export default QuorumStart
