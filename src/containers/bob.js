import { connect } from 'react-redux'
import { sendTokensToAlice } from '../actionCreators' 
import BobComponent from '../components/Bob'

const mapStateToProps = (state) => ({
  address: state.bob.accountAddress,
  balance: state.bob.balance
})

const mapDispatchToProps = {
  sendTokensToAlice
}

const Bob = connect(
  mapStateToProps,
  mapDispatchToProps
)(BobComponent)

export default Bob

