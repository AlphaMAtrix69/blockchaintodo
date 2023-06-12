const Migrations = artifacts.require("Migrations");
const todolist = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(todolist);
};
