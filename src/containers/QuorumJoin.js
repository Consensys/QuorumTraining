import { connect } from 'react-redux'
import { updateConsensusType } from '../actionCreators' 
import QuorumJoinComponent from '../components/QuorumJoin'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
  selectedConsensusType: state.quorum.selectedConsensusType
})

const mapDispatchToProps = {
  updateConsensusType
}

const QuorumJoin = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuorumJoinComponent)

export default QuorumJoin

