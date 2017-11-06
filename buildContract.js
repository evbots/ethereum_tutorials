const fs = require("fs");
const solc = require('solc');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let source = fs.readFileSync('contract.sol', 'utf8');
let compiledContract = solc.compile(source, 1);
let abi = compiledContract.contracts[':greeter'].interface;
let hexBytecode = web3.toHex(compiledContract.contracts[':greeter'].bytecode);
let gasEstimate = web3.eth.estimateGas({data: hexBytecode});
let greeterContract = web3.eth.contract(JSON.parse(abi));
const greeting = "Hello World!"
const options = {from:web3.eth.accounts[0], data: hexBytecode, gas: gasEstimate};

greeterContract.new(greeting, options, function(e, contract){
  if(!e) {
    if(!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

    } else {
      console.log("Contract mined! Yay! Address: " + contract.address);
      console.log(contract);
    }
  }
});
