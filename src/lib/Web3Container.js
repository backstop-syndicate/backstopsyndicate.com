import React, { useEffect, useState } from 'react'
import abi from './abi/backstopsyndicate.eth.abi.json'
import getWeb3 from './getWeb3'
import getContract from './getContract'

const Web3Container = (WrappedComponent) => {
    return (props) => {
        const [web3, setWeb3] = useState()
        const [account, setAccount] = useState()
        const [contract, setContract] = useState()
    
        useEffect(() => {
            async function init() {
                const web3 = await getWeb3()
                const accounts = await web3.eth.getAccounts()
                const networkId = await web3.eth.net.getId()
                const contractAddress = '0x00000000357646e36fe575885bb3e1a0772e64cc' // await web3.eth.ens.getAddress('backstopsyndicate.eth')
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
                contract={contract}
            />
        )
    }
}

export default Web3Container

        /*
        // init contract definition
        useEffect(() => {
            if (web3) {
                async function fetchContractDefinition () {
                    const networkId = await web3.eth.net.getId()
                    const contractAddress = await web3.eth.ens.getAddress('backstopsyndicate.eth')
                    setContractDefinition({
                        abi,
                        networks: {
                            [networkId]: {
                                address: contractAddress
                            }
                        }
                    })
                }
                fetchContractDefinition()
            }
        }, [web3])

        // init contract
        useEffect(() => {
            if (contractDefinition && web3) {
                async function initContract () {
                    const contract = await getContract(web3, contractDefinition)
                    setContract(contract)
                }
                initContract()
            }
        }, [contractDefinition, web3])
    */