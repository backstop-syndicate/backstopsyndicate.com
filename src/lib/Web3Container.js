import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'

import erc20abi from './abi/erc20.abi.json'
import sydnicateAbi from './abi/backstopsyndicate.eth.abi.json'
import getWeb3 from './getWeb3'
import getContract from './getContract'

const Web3Container = (WrappedComponent) => {
    return (props) => {
        const [web3, setWeb3] = useState()
        const [account, setAccount] = useState()
        const [syndicateContract, setSyndicateContract] = useState()

        const [daiBalance, setDaiBalance] = useState(new BigNumber(0))
        const [daiContract, setDaiContract] = useState()
        const [enlistedBalance, setEnlistedBalance] = useState(new BigNumber(0))
        const [totalDaiBalance, setTotalDaiBalance] = useState(new BigNumber(0))

        const handleEnable = async () => {
            try {
                const accounts = await window.ethereum.enable()
                setAccount(accounts[0])
            } catch (e) {
                console.log(e)
            }
        }

        const updateUserBalances = async () => {
            const daiBalance = await daiContract.methods.balanceOf(account).call()
            setDaiBalance(new BigNumber(daiBalance))
            const enlistedBalance = new BigNumber(await syndicateContract.methods.balanceOf(account).call())
            setEnlistedBalance(enlistedBalance)
        }

        const updateTotalDeposited = async () => {
            const contractBalance = new BigNumber(await syndicateContract.methods.getDaiBalance().call())
            setTotalDaiBalance(contractBalance)
        }

        // init web3, account, and syndicate contract
        useEffect(() => {
            async function init() {
                const web3 = await getWeb3()
                const accounts = await web3.eth.getAccounts()
                const networkId = await web3.eth.net.getId()
                const contractAddress = await web3.eth.ens.getAddress('backstopsyndicate.eth')
                const contractDefinition = {
                    abi: sydnicateAbi,
                    networks: {
                        [networkId]: {
                            address: contractAddress
                        }
                    }
                }
                const contract = await getContract(web3, contractDefinition)

                setWeb3(web3)
                setAccount(accounts[0])
                setDaiContract(new web3.eth.Contract(erc20abi, "0x6b175474e89094c44da98b954eedeac495271d0f"))
                setSyndicateContract(contract)
            }
            init()
        }, [])

        // init user balances
        useEffect(() => {
            if (account && daiContract && syndicateContract) {
                updateUserBalances()
            }
        }, [account, daiContract, syndicateContract])

        // init total deposited
        useEffect(() => {
            if (syndicateContract) {
                updateTotalDeposited()
            }
        }, [syndicateContract])

        return (
            <WrappedComponent
                {...props}
                account={account}
                daiBalance={daiBalance}
                daiContract={daiContract}
                enlistedBalance={enlistedBalance}
                onEnable={handleEnable}
                syndicateContract={syndicateContract}
                totalDaiBalance={totalDaiBalance}
                updateTotalDeposited={updateUserBalances}
                updateUserBalances={updateUserBalances}
                web3={web3}
            />
        )
    }
}

export default Web3Container