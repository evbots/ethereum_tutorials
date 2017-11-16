## Greeter Contract

A simple hello world Solidity smart contract.

### Background

This contract code comes directly from the main Ethereum smart contract beginner tutorial, located [here.](https://www.ethereum.org/greeter) However, the tutorial referenced an old [web3](https://github.com/ethereum/web3.js/) specification, so I decided to slightly modify my approach to building the hello world contract.

### Prerequisites

* Ability to obtain Ether. Use an exchange to purchase it or bum some off a friend.
* Download and [Go Ethereum](https://github.com/ethereum/go-ethereum) and run with the command `geth --rpc`
* Create an ethereum account with geth via command line or javascript console. [More on that here.](https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts)
* Transfer ether to your new account.

### Setup

After cloning this repository, install dependencies.
```
yarn
```

Make sure geth is running, if it's not already
```
geth --rpc
```

Transpile the build script so that it can be run.
```
yarn build
```

Assuming you've transfered ether to your account (not much is needed), unlock your account so you can spend money. You can do this via the geth console. Assuming geth is already up and running, open a new terminal window and use these commands:
```
geth attach
```

Then in the console type:
```
personal.unlockAccount(eth.accounts[0], <Password here>, 15000)
```

Now, assuming you are in this project's directory, run code:
```
node lib.js
```

This will reach out to geth via over your local network via it's API, and attempt to create the contract. 

Take note of the contract address after it's been mined. If geth has synced to the latest block, then you'll see this printed out. If not, you can always check your wallet address on etherscan.io and check the status of your contract. Once the contract has been mined, you can return to the geth javascript console and create an instance of your contract, and call `greet` on it.

In order to do this, you will need two things: the contract's ABI, and the contract address. To get the contract ABI, I have created a simple script to print this out. Just run:
```
yarn printAbi
```

Inside the geth javascript console (hint: get there with `geth attach` in a new bash window), create your initialize your contract with the code:
```
var myContract = web3.eth.contract(YOUR_ABI).at(YOUR_CONTRACT_ADDRESS);
```

You can now call your contract methods:
```
myContract.greet();
```
and
```
myContract.kill();
```
