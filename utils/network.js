export default {
  mainnet: {
    pubkey: 0x29,
    pubkeyhash: 0x29,
    scripthash: 0x64,
    witness_v0_keyhash: 'bc',
    witness_v0_scripthash: 'bc'
  },
  testnet: {
    pubkey: 0x64,
    pubkeyhash: 0x64,
    scripthash: 0x6e,
    witness_v0_keyhash: 'tb',
    witness_v0_scripthash: 'tb'
  }
}[process.env.network || 'mainnet']
