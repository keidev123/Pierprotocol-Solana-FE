const networkConfig = {
    Ethereum:
    {
        "chainId": "0x1",
        "chainName": "Ethereum Mainnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": ["https://eth-mainnet.g.alchemy.com/v2/xRpnmvup4LCr2mL9lNqqpKnHQJepfeSc"],
        "blockExplorerUrls": ["https://etherscan.io"]
    },

    Base: {
        "chainId": "0x2105",
        "chainName": "Base",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": ["https://mainnet.base.org"],
        "blockExplorerUrls": ["https://explorer.base.org"]
    },

    ZkSync: {
        "chainId": "0x144",
        "chainName": "zkSync",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": ["https://zksync-era.blockpi.network/v1/rpc/public"],
        "blockExplorerUrls": ["https://zkscan.io"]
    },

    Arbitrum: {
        "chainId": "0xA4B1",
        "chainName": "Arbitrum One",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": ["https://arb1.arbitrum.io/rpc"],
        "blockExplorerUrls": ["https://arbiscan.io"]
    },

    Optimism: {
        "chainId": "0xA",
        "chainName": "Optimism",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": ["https://mainnet.optimism.io"],
        "blockExplorerUrls": ["https://optimistic.etherscan.io"]
    },

    BSC: {
        "chainId": "0x38",
        "chainName": "Binance Smart Chain",
        "nativeCurrency": {
            "name": "Binance Coin",
            "symbol": "BNB",
            "decimals": 18
        },
        "rpcUrls": ["https://bsc-dataseed.binance.org/"],
        "blockExplorerUrls": ["https://bscscan.com"]
    },

    Scroll: {
        "chainId": "0x82750",
        "chainName": "Scroll",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": ["https://rpc.scroll.io"],
        "blockExplorerUrls": ["https://explorer.scroll.io"]
    },

    Linea: {
        "chainId": "0xE708",
        "chainName": "Linea",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
        },
        "rpcUrls": ["https://linea.drpc.org"],
        "blockExplorerUrls": ["https://lineascan.build/"],
    },

    Avalanche: {
        "chainId": "0xa86a",
        "chainName": "Avalanche",
        "nativeCurrency": {
            "name": "Avalanche",
            "symbol": "AVAX",
            "decimals": 18,
        },
        "rpcUrls": ["https://avalanche.drpc.org"],
        "blockExplorerUrls": ["https://snowtrace.io/"],
    }


}

export { networkConfig };
