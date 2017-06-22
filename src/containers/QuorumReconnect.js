import { connect } from 'react-redux'
import { updateBlockchainSelection } from '../actionCreators' 
import HomeComponent from '../components/Home'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
  selectedBlockchain: state.settings.selectedBlockchain
})

const mapDispatchToProps = {
  updateBlockchainSelection
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home

