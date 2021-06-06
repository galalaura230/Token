var NewtonFinanceToken = artifacts.require("./NewtonFinanceToken.sol");

module.exports = function (deployer) {
  deployer.deploy(NewtonFinanceToken);
};
