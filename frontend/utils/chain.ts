interface Node {
    name: string
    rpcUrl: string
    chainId: number
    chainIdHex: string
    explorerUrl: string
    currency: string
}

export function chain(): Node {
    return {
        name: 'Siberium Testnet',
        rpcUrl: "https://rpc.test.siberium.net",
        currency: 'SIBR',
        explorerUrl: 'https://explorer.test.siberium.net',
        chainId: 111000,
        chainIdHex: '0x1B198',
    }
}