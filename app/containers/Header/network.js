
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Goerli Testnet': { rpc: 'https://goerli.infura.io/v3/4806cb7bee044030bf9cda47f40c8d7b', tx_explorer: 'https://goerli.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/v3/4806cb7bee044030bf9cda47f40c8d7b', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
