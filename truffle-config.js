module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", 
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true, 
          runs: 200      
        },
      }
    }
  }
};
// “path”: “soljson-v0.8.3+commit.8d00100c.js”,
// “version”: “0.8.3”,
// “build”: “commit.8d00100c”,
// “longVersion”: “0.8.3+commit.8d00100c”,
// “keccak256”: “0x51777116af58223a41aa3016d0bf733bbb0f78ad9ba4bcc36487eba175f65015n”,
// “sha256”: “0xb5cedfa8de5f9421fbdaccf9fd5038652c2632344b3b68e5278de81e9aeac210n”,
// “urls”: [
//   “bzzr://c7d43da1bc5529d2cc311e00579c36dcff258c42b8ed240b6c4e97bd85492a64”,
//   “dweb:/ipfs/QmWbNMzJryhiZmyifLDQteGPwN4aTgXQB6barBvXYVw975”
// ]