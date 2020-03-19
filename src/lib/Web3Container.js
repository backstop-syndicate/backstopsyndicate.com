import React, { useEffect, useState } from 'react'
import abi from './abi/backstopsyndicate.eth.abi.json'
import getWeb3 from './getWeb3'
import getContract from './getContract'

const Web3Container = (WrappedComponent) => {
    return (props) => {
        const [web3, setWeb3] = useState()
        const [account, setAccount] = useState()
        const [contract, setContract] = useState()
    
        const handleEnable = async () => {
            try {
                const accounts = await window.ethereum.enable()
                console.log(accounts)
                setAccount(accounts[0])
            } catch (e) {
                console.log(e)
            }
        }

        useEffect(() => {
            async function init() {
                const web3 = await getWeb3()
                const accounts = await web3.eth.getAccounts()
                const networkId = await web3.eth.net.getId()
                const contractAddress = await web3.eth.ens.getAddress('backstopsyndicate.eth')
                const contractDefinition = {
                    abi,
                    networks: {
                        [networkId]: {
                            address: contractAddress
                        }
                    }
                }
                const contract = await getContract(web3, contractDefinition)

                setWeb3(web3)
                setAccount(accounts[0])
                setContract(contract)
            }
            init()
        }, [])

        return (
            <WrappedComponent
                {...props}
                web3={web3}
                account={account}
                onEnable={handleEnable}
                syndicateContract={contract}
            />
        )
    }
}

export default Web3Container