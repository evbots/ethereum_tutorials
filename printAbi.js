import * as fs from 'fs';
import solc from 'solc';

const source = fs.readFileSync('contract.sol', 'utf8');
const compiledContract = solc.compile(source, 1).contracts[':greeter'];
const abi = compiledContract.interface;
console.log(abi);