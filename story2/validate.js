const IgniteLab = artifacts.require('IgniteLab');

module.exports = async (done) => {
    console.log('Getting deployed version of IgniteLab Token');

    let _meta;
    let testout = await web3.eth.getAccounts();
    const _owner = testout[0];
    const _recipient = testout[1];
    let _amount = 1000000;

    IgniteLab.deployed().then(function(instance){
        console.log("Getting the current balance for source account...");
        _meta = instance;
        return _meta.balanceOf.call(_owner);
    }).then(function(ownerBalanceResult){
        console.log("Initial owner balance: " + ownerBalanceResult.toNumber());
        return _meta.balanceOf.call(_recipient);
    }).then(function(recipientBalanceResult){
        console.log("Initial recipient balance: " + recipientBalanceResult.toNumber());
        console.log("Transferring " + _amount + " to recipient");
        return _meta.transfer(_recipient, _amount);
    }).then(function(transferTxResult){
        return _meta.balanceOf.call(_owner);
    }).then(function(ownerFinalBalanceResult){
        console.log("Final owner balance: " + ownerFinalBalanceResult);
        return _meta.balanceOf.call(_recipient);
    }).then(function(recipientFinalBalanceResult){
        console.log("Final recipient balance: " + recipientFinalBalanceResult.toNumber());
    });
};