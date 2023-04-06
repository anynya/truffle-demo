const MintableERC721 = artifacts.require("Mintable721")

contract("MintableERC721", async function (accounts) {
    it("MintNFT", async () => {
        const instance = await MintableERC721.deployed()

        const name = await instance.name.call()

        assert.equal(name, "Mintable NFT")

        let receivers = [
            accounts[1],
            accounts[1],
            accounts[2],
            accounts[3],
        ]

        let uris = [
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
        ]

        await instance.mint(receivers, uris)

        const acc_bal_1 = await instance.balanceOf.call(accounts[1])

        assert.equal(acc_bal_1.toNumber(), 2)

        const acc_2 = await instance.ownerOf.call(2)

        assert.equal(acc_2, accounts[2])
    })
})