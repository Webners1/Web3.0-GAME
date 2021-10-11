import React, { Component, useEffect,useState} from 'react';
import Web3 from 'web3'
import './App.css';
import MemoryToken from '../abis/MemoryToken.json'
import brain from '../brain.png'
const CARD_ARRAY=[
  {
    name: 'fries',
    img: '/images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: '/images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: '/images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: '/images/pizza.png'
  },
  {
    name: 'milkshake',
    img: '/images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: '/images/hotdog.png'
  },
  {
    name: 'fries',
    img: '/images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: '/images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: '/images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: '/images/pizza.png'
  },
  {
    name: 'milkshake',
    img: '/images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: '/images/hotdog.png'
  }
]
function App() {
  let [account, setAccount] = useState()
  let [balance, setBalance] = useState()
  let [netsData, setnetData] = useState()
  let [token, setToken] = useState()
  let [cardArray, setCardArray] = useState([])
  let [tokenURI, setTokenURI] = useState([])
  let [tokenbalance, settokenBalance] = useState()

  const loadBlockchainData = async () => {
    let token;
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts();
    setAccount(account = accounts[0])
    setBalance(balance = await web3.eth.getBalance(account));
    console.log(account, balance)
    //Load Token

    const networkId = await web3.eth.net.getId()
    const netData = MemoryToken.networks[networkId]
    const abi = MemoryToken.abi
    if(netData){
      setnetData(netsData = netData.address) 
      setToken(token = new web3.eth.Contract(abi, netsData))
     settokenBalance(tokenbalance = await token.methods.totalSupply().call());
     let balanceOf = await token.methods.balanceOf(accounts[0]).call()
     for(let i=0;i<balanceOf;i++){
       let id =await token.mehtods.tokenOfOwnerByIndex(accounts[0],i).call()
       setTokenURI(tokenURI = [tokenURI,await token.methods.tokenURI(id).call()])
     }
    } 
    else{
      window.alert('smart contract not deployed')
    }
  }
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  }

  const init = async () => {
    await loadWeb3();
    await loadBlockchainData()
    setCardArray(cardArray = CARD_ARRAY.sort(()=> 0.5 - Math.random()))
  }
  useEffect(() => {
    init()
  }, [])

    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={brain} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Memory Tokens
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-muted"><span id="account">{account}</span></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1 className="d-4">Edit this file in App.js!</h1>

                <div className="grid mb-4" >

                  {/* Code goes here... */}

                </div>

                <div>

                  {/* Code goes here... */}

                  <div className="grid mb-4" >

                    {/* Code goes here... */}

                  </div>

                </div>

              </div>

            </main>
          </div>
        </div>
      </div>
    );
  
}

export default App;
