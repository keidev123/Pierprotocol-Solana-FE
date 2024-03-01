const defaultTokenInfos = [
    {
        network: "Ethereum",
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logo: "../assets/images/tokens/usdt.png"
    },
    {
        network: "Ethereum",
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logo: "../assets/images/tokens/usdc.png"
    },
    {
        network: "Ethereum",
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        name: "Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        logo: "../assets/images/tokens/dai.png"
    },

    {
        network: "Optimism",
        address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logo: "../assets/images/tokens/usdt.png"
    },
    {
        network: "Optimism",
        address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logo: "../assets/images/tokens/usdc.png"
    },
    {
        network: "Optimism",
        address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
        name: "Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        logo: "../assets/images/tokens/dai.png"
    },
    {
        network: "Arbitrum",
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logo: "../assets/images/tokens/usdt.png"
    },
    {
        network: "Arbitrum",
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logo: "../assets/images/tokens/usdc.png"
    },
    {
        network: "Arbitrum",
        address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        name: "Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        logo: "../assets/images/tokens/dai.png"
    },
    {
        network: "ZkSync",
        address: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logo: "../assets/images/tokens/usdt.png"
    },
    {
        network: "ZkSync",
        address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logo: "../assets/images/tokens/usdc.png"
    },
    {
        network: "ZkSync",
        address: "0x4B9eb6c0b6ea15176BBF62841C6B2A8a398cb656",
        name: "Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        logo: "../assets/images/tokens/dai.png"
    },
    {
        network: "Base",
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logo: "../assets/images/tokens/usdc.png"
    },
    {
        network: "Base",
        address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
        name: "Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        logo: "../assets/images/tokens/dai.png"
    },
    {
        network: "Scroll",
        address: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logo: "../assets/images/tokens/usdt.png"
    },
    {
        network: "Scroll",
        address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logo: "../assets/images/tokens/usdc.png"
    },
    {
        network: "Scroll",
        address: "0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97",
        name: "Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        logo: "../assets/images/tokens/dai.png"
    },

    // {
    //     network: "Ethereum",
    //     address: "0x90A4033F72825Cdc71F07236A6eE52f7Fb5C9adf",
    //     name: "T*WBTC",
    //     symbol: "WBTC",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/WBTC.png"
    // },
    // {
    //     network: "Ethereum",
    //     address: "0xD99173935A8ba53408cB07dA4A37165d2A81a73F",
    //     name: "T*1inch",
    //     symbol: "1inch",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/1inch.png"
    // },
    // {
    //     network: "Ethereum",
    //     address: "0xDC12767670bd8D700F1c8A3838280da801506978",
    //     name: "T*Aave",
    //     symbol: "Aave",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/Aave.png"
    // },
    // {
    //     network: "Solana",
    //     address: "0xF653901f43a5deD57F146e3fDd785a0f41Bd1176",
    //     name: "T*USDC",
    //     symbol: "USDC",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/usdc.png"
    // },
    // {
    //     network: "Solana",
    //     address: "0x9EbF97EA45Ae4Bb9C76E78740f93548AeA85409B",
    //     name: "T*USDT",
    //     symbol: "USDT",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/usdt.png"
    // },
    // {
    //     network: "Solana",
    //     address: "0x581BD825AF66Db5AA10bb68933f1a6f030BfF3c3",
    //     name: "T*DAI",
    //     symbol: "DAI",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/dai.png"
    // },
    // {
    //     network: "Sei",
    //     address: "0xF653901f43a5deD57F146e3fDd785a0f41Bd1176",
    //     name: "T*USDC",
    //     symbol: "USDC",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/usdc.png"
    // },
    // {
    //     network: "Sei",
    //     address: "0x9EbF97EA45Ae4Bb9C76E78740f93548AeA85409B",
    //     name: "T*USDT",
    //     symbol: "USDT",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/usdt.png"
    // },
    // {
    //     network: "Sei",
    //     address: "0x581BD825AF66Db5AA10bb68933f1a6f030BfF3c3",
    //     name: "T*DAI",
    //     symbol: "DAI",
    //     decimals: 18,
    //     logo: "../assets/images/tokens/dai.png"
    // },
]

export { defaultTokenInfos }