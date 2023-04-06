const CrowdFunding = artifacts.require("CrowdFunding")

module.exports = function (developer) {
    developer.deploy(CrowdFunding)
}