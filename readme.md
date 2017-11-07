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

Build contract from source
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

This will reach out to geth via over your local network via it's API, and attempt to create the contract. You can reference the rest of the beginner Ethereum tutorial mentioned at the beginning of the article for points on how to interact with your smart contract after it's mined by the network. You can also check out the contract on etherscan.io with your account address or transaction hash logged by this project's script.