require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rebel saddle prosper install crew outer torch'; 
let testAccounts = [
"0x07ca3abec0626cf0e914c50aaa8a58c98ba3581def4643ee71ce3a9b00253473",
"0x207ca31f95f623aae2ff4854899b8452fc5b6ffb04187ac7e5b893c6b636e147",
"0xfe037c68acdeab463cf822556734219b305803e8c8d4a6440476dd65ba807c20",
"0xc888eae93274dcad8039bd228600bc69ce05004e1186bfbfed0d585546230c30",
"0x9d02f3614ff82438b929f733a50ab04ceead05772175dc9e6909127db69c5030",
"0xfc2875d04d3da436b61ca1d2696d9516a422f903ba45f062b493896a775a2018",
"0x03ba4267c9f8a2a549337b2d7bfccb71e12cd392db4df50e74f25d7777874061",
"0xd6e9eb033dabd123518800c804615ce6f2abcd0a1ab5a6fa972a97a22a2653b7",
"0xaaf41e9efb796d3902317b70981768b72b6aa60a99f1ff2ef878de107364e856",
"0xafc7975e3eba049e2e60186dbef4a997f04bf1c9b59587f29fffb9f4b243b177"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


