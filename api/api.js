const express = require('express')
const bodyParser = require('body-parser')

const app = require('./blockchain.js')

const api = express()

const port = 4000;

api.use(bodyParser.json({limit: '16mb'}))
api.use(bodyParser.urlencoded({
  extended: true
}))

api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

api.get('/sendTokens', function(req, res){
  res.send('1111')
  /*
  app.SendTokens(req.query.to, req.query.amount, function(err, txId){
    if(err){
      res.send({error: '' + err})
    } else {
      res.send(txId)
    }
  })
  */
})

api.get('/getBalance', function(req, res){
  app.GetBalance(req.query.name, function(err, balance){
    if(err){
      res.send({error: '' + err})
    } else {
      res.send(balance)
    }
  })
})


api.listen(port, function () {
  console.log('api listening on port '+port)
  console.log('Running as:', process.env.NODE_ENV)
})
