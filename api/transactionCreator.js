var keythereum = require("keythereum");
var Tx = require('ethereumjs-tx');
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:20000'));

var accounts = {}

function newAccount(name, cb){
  var privateKey = keythereum.create().privateKey.toString('hex');
  var address = keythereum.privateKeyToAddress(privateKey);
  accounts[name] = {
    name: name,
    address: address,
    privateKey: privateKey 
  };
  if(cb){
    cb(accounts[name]);
  } else {
    return accounts[name];
  }
}

function getAddressFromName(name, cb){
 if(accounts[name] != null){
    cb(accounts[name]);
  } else {
    newAccount(name, function(account){
      cb(account);
    });
  }
}

function isAddressInCache(name){
 if(accounts[name] != null){
    return true;
  } else {
    return false;  
  }
}

// Can't get the private key without the password, this function is to remain private!
function getPrivateKey(name, cb){
  if(accounts[name] != null){
    var privateKey = accounts[name].privateKey;
    cb(privateKey);
  } else { // Load into cache
    newAccount(name, function(account){
      cb(account.privateKey);
    });
  }
}

function signRawTransaction(rawTx, name, cb){
  getPrivateKey(name, function(privateKey){
    web3.eth.getTransactionCount(accounts[name].address, function(err, nonce){
      rawTx.nonce = '0x'+nonce.toString(16);
      var tx = new Tx(rawTx);
      tx.sign(new Buffer(privateKey, 'hex'));
      var serializedTx = tx.serialize();
      cb(serializedTx.toString('hex'));
    });
  });
}

exports.NewAccount = newAccount;
exports.SignRawTransaction = signRawTransaction;
exports.IsAddressInCache = isAddressInCache;
exports.GetAddressFromName = getAddressFromName;
exports.GetPrivateKey = getPrivateKey;
