const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = async function(deployer){
  let accounts = await web3.eth.getAccounts();

  deployer.deploy(MultiSigWallet, [accounts[0],accounts[1],accounts[2],
  accounts[3]], 2).then(function(){
      console.log("MultiSig wallet has been deployed!");
  });


}
