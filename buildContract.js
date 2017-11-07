import * as fs from 'fs';
import solc from 'solc';
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const source = fs.readFileSync('contract.sol', 'utf8');
const compiledContract = solc.compile(source, 1).contracts[':greeter'];
const abi = compiledContract.interface;

// append 0x so geth can parse
const bytecode = `0x${compiledContract.bytecode}`;
const gasEstimate = web3.eth.estimateGas({data: bytecode});
const greeterContract = web3.eth.contract(JSON.parse(abi));
const greeting = 'Hello World!';
const options = {from: web3.eth.accounts[0], data: bytecode, gas: (gasEstimate*2)};

greeterContract.new(greeting, options, (e, contract) => {
  if(!e) {
    if(!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
    } else {
      console.log("Contract mined! Yay! Address: " + contract.address);
      console.log(contract);
    }
  }
});
