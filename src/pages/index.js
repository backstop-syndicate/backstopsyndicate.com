import React from "react"

import Button from "../components/Button"
import Buy from '../components/Buy'
import Deposit from '../components/Deposit'
import Preview from "../components/Preview"
import Withdraw from "../components/Withdraw/Withdraw"

import withWeb3 from '../lib/Web3Container'
import { AppContext } from '../context'

const Index = ({
    account,
    daiBalance,
    daiContract,
    enlistedBalance,
    onEnable,
    syndicateContract,
    updateTotalBalance,
    updateUserBalances,
    web3,
}) => {

    const needsMetamask = process.browser ? !window.ethereum : false
    const disabled = !account

    return (
        <AppContext.Provider value={{
            account,
            daiBalance,
            daiContract,
            enlistedBalance,
            syndicateContract,
            updateTotalBalance,
            updateUserBalances,
            web3,
        }}>
            <Preview />
            <div style={{
                margin: '64px 0',
                position: 'relative',
            }}>
                {!!disabled && !needsMetamask && (
                    <ActionWrapper>
                        <div>
                        <Button
                            buttonType="success"
                            onClick={onEnable}
                        >
                            Unlock To Continue
                        </Button>
                        </div>
                    </ActionWrapper>
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
                    <ActionWrapper>
                        <div>
                            <Button
                                buttonType="success"
                                onClick={() => window.open('https://metamask.io')}
                            >
                                Get MetaMask to participate!
                            </Button>
                        </div>
                    </ActionWrapper>
                )}
            </div>
        </AppContext.Provider>
    );
}

export default withWeb3(Index)

const ActionWrapper = ({children }) => (
    <div style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    }}>
        {children}
    </div>
)