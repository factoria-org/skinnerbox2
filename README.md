# Skinnerbox

> A dead simple forkable NFT vending machine

![box.png](box.png)

# How is this different from Skinnerbox v1?

> The original Skinnerbox is at https://github.com/factoria-org/skinnerbox

![skinnerbox2.gif](skinnerbox2.gif)

1. Walletconnect support: v1 only supported Metamask. Skinnerbox2 uses [Walletconnect](https://walletconnect.com/), which means it supports all wallets, including mobile.
2. Better error handling: v1 didn't do much to handle errors. Skinnerbox2 now prints out all errors when something goes wrong, so it's easier to understand what's gone wrong.
3. Requires infura ID: Because walletconnect requires you to insert an Infura ID, you need to set up an Infura account (FREE) and use its project ID.

# Usage

Here's an example walkthrough of how it's used:

![skinnerbox.gif](skinnerbox.gif)

You can try it out here: https://factoria-org.github.io/skinnerbox2

> NOTE: This demo works on Rinkeby (so it's easy to test). Make sure to switch the wallet network to Rinkeby testnet first. (But this repository works both on mainnet and testnet automatically. When you fork this repo and add your own mainnet address, it should automatically work on mainnet too)

# How to use

1. Go deploy an NFT contract with [Factoria](https://factoria.app/)
2. Fork this repository
3. Update the [box.json](box.json) to set your own contract address from step 1, as well as set the network ("rinkeby" or "main")
4. Also, update the `"infura"` attribute inside the box.json file. You can learn more about how to set up an Infura project over here: https://blog.infura.io/getting-started-with-infura-28e41844cc89/ 
5. (optional) Customize style by changing the [style.css](style.css)
6. Create github pages ([tutorial](https://dev.to/byteslash/getting-started-with-github-pages-4jpf))

# Advanced

For those of you who want to hack on it to build custom features. Here are the relevant files:

1. [index.html](index.html): This is the main landing page, which displays the currently signed in user's invite lists
2. [mint.html](mint.html): This is the minting app

The code is super simple because it's powered by **[f0.js](f0.js)**, which abstracts away most of the web3, ipfs, and merkle proof handling into one liner methods.
