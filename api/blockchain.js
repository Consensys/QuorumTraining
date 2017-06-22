var txCreator = require('./transactionCreator.js');
var contractRawTx = require('ethereum-transaction-creator');
var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3();
var Tx = require('ethereumjs-tx');

web3.setProvider(new web3.providers.HttpProvider('http://localhost:20010'));

var contractAbi=JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"type":"constructor"}]');
var contractAddress='0x2706aa3400656bcfbcf9f09faa044a39f72d8f84';


function getBalance(name, cb){
  txCreator.GetAddressFromName(name, function(account){
    var balance = getInstanceFromABI(contractAbi, contractAddress);
    var balanceObj = balance.balanceOf(account.address);
    cb(null, {accountAddress: account.address, balance: balanceObj});
  });
}

function sendTokens(userName, toAddress, amount, cb){
  txCreator.GetAddressFromName('bob', function(account){
    getRawContractTransfer(contractAbi, contractAddress, account.address, toAddress,amount, function(rawTx){
      signRawTransaction(rawTx, userName, function(signedTx){
        web3.eth.sendRawTransaction(signedTx, function(err, hash) {
        if (err) {console.log('ERROR | SendRawTransaction:', err);}
          cb(hash);
        });
      });
    });
  });
}

function getInstanceFromABI(){
  var contract = web3.eth.contract(contractAbi);
  return contract.at(contractAddress);
}

function getRawContractTransfer(abi, contractAddress, fromAddress, toAddress, value, cb){
  contractRawTx.GetContractInstance(abi, contractAddress, function(xza){
    xza.transfer(toAddress, value, function(rawTx){
      rawTx.from = fromAddress;
      var nonce = web3.eth.getTransactionCount(fromAddress);
      rawTx.nonce = '0x'+nonce.toString(16);
      var gasCost = web3.eth.estimateGas(rawTx);
      rawTx.gasPrice = '0x'+padToEven(Number(0).toString(16));
      rawTx.gasLimit = '0x'+padToEven(Number(gasCost).toString(16));
      cb(rawTx);
    });
  });
} 


function padToEven(n, z){
  return pad(n, n.length + n.length % 2, z);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function submitTokenContract(cb){
  var filePath = 'Contracts/token.sol';
  fs.readFile(filePath, 'utf8', function(err, source){
    if(err){console.log("ERROR:", err);}
    var compiled = web3.eth.compile.solidity(source);
    var code = compiled.Token.code;
    var abi = compiled.Token.info.abiDefinition;

    var contractData = web3.eth.contract(abi).new.getData({data: code});
    var estimatedGas = web3.eth.estimateGas({data: contractData});

    web3.eth.contract(abi).new({data: code, gas: estimatedGas + 3*30000, gasPrice: 1}, function (err, contract) { 
      if(err) {
        console.error("ERROR:", err);   // Log any errors
        cb();
      } else if(contract.address){  
        console.log('Contract mined, address: ' + contract.address);
        cb({
          address: contract.address,
          abi: abi
        });
      }
    });
  });
}

function signRawTransaction(rawTx, senderName, cb){
  txCreator.GetAddressFromName(senderName, function(account){
    web3.eth.getTransactionCount(account.address, function(err, nonce){
      rawTx.nonce = '0x'+nonce.toString(16);
      var tx = new Tx(rawTx);
      tx.sign(new Buffer(account.privateKey, 'hex'));
      var serializedTx = tx.serialize();
      cb(serializedTx.toString('hex'));
    });
  });
}

exports.GetBalance = getBalance;
exports.SendTokens = sendTokens;
