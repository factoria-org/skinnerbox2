const connect = async (config) => {
  const f0 = new F0()
  localStorage.removeItem('walletconnect')
  localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE')
  let n = {
    rinkeby: "rinkeby",
    main: "mainnet"
  }
  const web3Modal = new Web3Modal.default({
    network: n[config.network],
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        display: { name: "Mobile" },
        package: WalletConnectProvider.default,
        options: {
          infuraId: config.infura
        }
      }
    }
  });
  let provider = await web3Modal.connect();
  const web3 = new Web3(provider);
  await f0.init({ web3: web3, contract: config.contract, network: config.network })
  console.log("initialized")
  return { f0, web3 }
}
