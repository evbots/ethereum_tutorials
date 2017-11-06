# Greeter Contract

Simple hello world solidity contract.

## Deployment

Deployed and run using `geth` (go implementation of ethereum)

Launch ethereum node
```
geth
```

Build contract from source
```
yarn build
```

Launch javascript console and load in built contract code
```
geth attach
>loadScript("/path/to/build/buildContract.js");
```

