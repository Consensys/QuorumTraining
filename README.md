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
