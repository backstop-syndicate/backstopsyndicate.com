import React, { useEffect, useState } from "react";
import { BigNumber } from 'bignumber.js'

import Button from "../components/Button"
import Buy from '../components/Buy'
import Deposit from '../components/Deposit'
import Preview from "../components/Preview"
import Withdraw from "../components/Withdraw/Withdraw"

import withWeb3 from '../lib/Web3Container'
import erc20abi from '../lib/abi/erc20.abi.json'

import { AppContext } from '../context'

const Index = ({
    account,
    onEnable,
    syndicateContract,
    web3,
}) => {
    const daiContract = web3 ? new web3.eth.Contract(erc20abi, "0x6b175474e89094c44da98b954eedeac495271d0f") : null
    const [daiBalance, setDaiBalance] = useState(new BigNumber(0))
    const [enlistedBalance, setEnlistedBalance] = useState(new BigNumber(0))

    const updateBalances = async () => {
        const daiBalance = await daiContract.methods.balanceOf(account).call()
        setDaiBalance(new BigNumber(daiBalance))
        const enlistedBalance = new BigNumber(await syndicateContract.methods.balanceOf(account).call())
        setEnlistedBalance(enlistedBalance)
    }

    useEffect(() => {
        if (account && syndicateContract && web3) {
            updateBalances()
        }
    }, [account, syndicateContract, web3])

    const needsMetamask = process.browser ? !window.ethereum : false
    const disabled = !account

    return (
        <AppContext.Provider value={{
            account,
            daiBalance,
            daiContract,
            enlistedBalance,
            syndicateContract,
            updateBalances,
            web3,
        }}>
            <Preview />
            <div style={{
                margin: '64px 0',
                position: 'relative',
            }}>
                {!!disabled && !needsMetamask && (
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div>
                        <Button
                            buttonType="success"
                            onClick={onEnable}
                        >
                            Unlock To Continue
                        </Button>
                        </div>
                    </div>
                )}
                {!needsMetamask ? (
                    <div style={{
                        opacity: disabled ? 0.25 : 1,
                        pointerEvents: disabled ? 'none' : 'all',
                    }}>
                        <Deposit />
                        <Buy />
                        <Withdraw />
                    </div>
                ) : (
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div>
                            <Button
                                buttonType="success"
                                onClick={() => window.open('https://metamask.io')}
                            >
                                Get MetaMask to participate!
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </AppContext.Provider>
    );
}

export default withWeb3(Index)