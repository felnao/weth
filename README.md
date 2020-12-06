Wrapped ETH subgraph

Wrapped Ethereum delivers the power of Ethereum with the flexibility of an ERC20 token.

Wrapped Ethereum (WETH) is the first ERC20 token backed 1:1 with Ethereum.

Completely transparent. 100% verifiable. Community led.

The Wrapped ETH subgraph aims to index WETH token transactions in Ethereum mainnet. It tracks data of all Merchant, Custodians and Users transactions.
Types of Data

    data on Total Supply
    data on transactions (mint, burn and transfers)
    data on holders

Entities:

    User : data on users and their balances
    Minter: data on Merchants and related minted and burnt tokens
    UserCounter: data on users per day
    MinterCounter: data on number of Minters
    TransferCounter: data on number of transfers per day
    TotalSupply: data on total supply

EventHandlers

    event: Burn(indexed address,uint256)
        handler: handleBurn
    event: Mint(indexed address,uint256)
        handler: handleMint
    event: Transfer(indexed address,indexed address,uint256)
        handler: handleTransfer

Realized by : Felano9580
              ALD#8084
