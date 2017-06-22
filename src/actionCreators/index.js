import * as actions from '../actions'

export function updateBlockchainSelection(selectedBlockchain) {
  return function(dispatch) {
    dispatch(actions.updateBlockchainSelection(selectedBlockchain))
  }
}

export function updateBalances() {
  return function(dispatch) {
    fetch('http://localhost:4000/getBalance?name=bob')
    .then(response => response.json())
    .then(bobBalance => {
      dispatch(actions.updateBobBalance(bobBalance))
      fetch('http://localhost:4000/getBalance?name=alice')
      .then(response => response.json())
      .then(aliceBalance => {
        dispatch(actions.updateAliceBalance(aliceBalance))
      })
    })
  }
}

export function sendTokensToAlice(amount) {
  return function(dispatch) {
    console.log('amount', amount)
    fetch('http://localhost:4000/sendTokens?to=alice&amount=' + amount)
    .then(response => response.json())
    .then(txId => {
      console.log('txId:', txId)
    })
  }
}
