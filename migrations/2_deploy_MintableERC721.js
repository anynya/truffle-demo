const Mintable721 = artifacts.require("Mintable721")

module.exports = function (developer) {
    developer.deploy(Mintable721, "Mintable NFT", "mNFT")
}