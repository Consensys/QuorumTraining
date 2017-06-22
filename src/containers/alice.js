import { connect } from 'react-redux'
import AliceComponent from '../components/Alice'

const mapStateToProps = (state) => ({
  address: state.alice.accountAddress,
  balance: state.alice.balance
})

const Alice = connect(
  mapStateToProps
)(AliceComponent)

export default Alice

