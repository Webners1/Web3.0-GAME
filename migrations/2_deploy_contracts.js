const MemoryToken = artifacts.require("MemoryToken");

module.exports = function(deployer) {
  // Code goes here...
  deployer.deploy(MemoryToken,"MuzammilToken","MTO")
};
