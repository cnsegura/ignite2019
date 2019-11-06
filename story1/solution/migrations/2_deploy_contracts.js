var HelloBlockchain = artifacts.require("IgniteLab");
var Arg = 100;
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
};