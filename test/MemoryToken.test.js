const { assert } = require('chai')

const MemoryToken = artifacts.require('./MemoryToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {
  let Token
  before(async()=>{

  })
  describe("deployment",async()=>{
    it('deployes successfully', async()=>{
Token = await MemoryToken.new("MuzammilNewToken","MTNO")
      console.log(await Token.name())
      console.log(await Token.symbol())
    })
  })
  describe('Token Deploy',async()=>{
    it('tokenSuccess',async()=>{
      await Token.mintToken(accounts[0],"https://www.muzammil-nft.com/nft")
    let result = await Token.totalSupply()
    assert.equal(result.toString(),'1','total supply is correct')

      result = await Token.balanceOf(accounts[0])
      assert.equal(result.toString(), '1', 'balance is correct')

      result = await Token.ownerOf('1')
      assert.equal(result.toString(), accounts[0].toString(), 'Owner is correct')
      result = await Token.tokenOfOwnerByIndex(accounts[0],0)
     let balanceOf = await Token.balanceOf(accounts[0])

      let tokenId=[]
      for (let i = 0; i < balanceOf;i++){
      let id = await Token.tokenOfOwnerByIndex(accounts[0],i)
      tokenId.push(id.toString())
    }
    let expected = ['1']
      assert.equal(tokenId.toString(), expected.toString(),'TokenIds are correct')

      let tokenURI= await Token.tokenURI('1')
      assert.equal(tokenURI,'https://www.muzammil-nft.com/nft')
    })
  })
})



















