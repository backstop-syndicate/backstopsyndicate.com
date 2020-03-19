import React from "react"

import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'

import Button from "../components/Button"
import Buy from '../components/Buy'
import Container from '../components/Container'
import Deposit from '../components/Deposit'
import Preview from "../components/Preview"
import Withdraw from "../components/Withdraw/Withdraw"

import { decAmount, numberWithCommas } from '../lib/util'
import withWeb3 from '../lib/Web3Container'
import { AppContext } from '../context'

const Index = ({
    account,
    daiBalance,
    daiContract,
    enlistedBalance,
    onEnable,
    syndicateContract,
    totalDaiBalance,
    holders,
    updateTotalDeposited,
    updateUserBalances,
    web3,
}) => {

    const needsMetamask = process.browser ? !window.ethereum : false;
    const disabled = !account;

    return (
        <AppContext.Provider value={{
            account,
            daiBalance,
            daiContract,
            enlistedBalance,
            syndicateContract,
            updateTotalDeposited,
            updateUserBalances,
            web3,
        }}>
            <Preview />
            <Container >
                <h2 style={{textAlign: 'center', marginTop: 40, fontSize: 22, lineHeight: 1.3}}>Participate in the upcoming MKR auctions at a backstop price of 100 Dai per MKR</h2>
            </Container>
            <Container>
                <div style={{
                    border: '2px solid rgba(255,255,255,0.25)',
                    borderRadius: 3,
                    margin: '64px 0',
                    padding: 24,
                    textAlign: 'center',
                }}>
                    <h1 style={{ fontSize: 32, letterSpacing: '.2rem' }}>{numberWithCommas(decAmount(totalDaiBalance, 18, 2))}</h1>
                    <h3 style={{ marginTop: 12 }}>Total Dai Deposited</h3>
                    {/*<br />*/}
                    {/*<h1 style={{ fontSize: 32, letterSpacing: '.2rem' }}>{holders}</h1>*/}
                    {/*<h3 style={{ marginTop: 12 }}>Total Participants</h3>*/}
                </div>
            </Container>
            {!!web3 ? (
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
            ) : (
                <Container>
                    <ColorLinearProgress />
                </Container>
            )}
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

const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#086788',
    },
    barColorPrimary: {
      backgroundColor: '#0daee6',
    },
  })(LinearProgress)