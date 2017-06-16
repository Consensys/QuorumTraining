# QuorumTraining
QuorumTraining

# Resetting cakeshop

If cakeshop is still running, use `ctrl + c` to end it

1. `cd cakeshop`
2. `rm -rf data`
3. `java -jar cakeshop.war example`
4. `sed -i 's/geth.url=http\\:\/\/localhost\\:22000/geth.url=http\\:\/\/localhost\\:20010/g' data/local/application.properties`
5. `echo contract.registry.addr=0xa5e0d19b5f8a48ee43f6590d3c1de48569c24a15 >> data/local/shared.properties`
6. `CAKESHOP_SHARED_CONFIG="./data/local/shared.properties" java -jar cakeshop.war`

# Interacting with the publicly shared contract

## Creating the contract instance

1. `cd QuorumNetworkManager`
2. `./attachToLocalQuorumNode.sh`
3. `var address = "0x9927725e310f27ee52f92705d3934dc0d1a09987"`
4. `var abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"},{"indexed":false,"name":"newVal","type":"uint256"}],"name":"Change","type":"event"}]`
5. `var contract = eth.contract(abi).at(address)`

## Getting the value

1. `contract.get()`

# Interacting with the private contract

## Creating the contract instance

1. `cd QuorumNetworkManager`
2. `./attachToLocalQuorumNode.sh`
3. `var address = "0xb56cfb0862e544e2f82dd2982e97dc096287846b"`
4. `var abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"},{"indexed":false,"name":"newVal","type":"uint256"}],"name":"Change","type":"event"}]`
5. `var contract = eth.contract(abi).at(address)`

## Getting the value

1. `contract.get()`

# Token Contract

## Get instance of Token contract

In the attached geth console:

1.`var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}]
`
2. `var address = "0xf9a16b3d669b622a9129656e51d36c8b1b83bbbf"`
3. `var contract = eth.contract(abi).at(address)`

## Get address

`eth.accounts[0]`

## View balance

contract.balanceOf(eth.accounts[0])
