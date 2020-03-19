import React, { useContext, useState } from 'react'

import { AppContext } from '../../context'
import { bnAmount, decAmount } from '../../lib/util'

import Button from '../Button'
import Container from '../Container'
import H3 from '../H3'
import Hint from '../Hint'
import Input from '../Input'
import Modal from '../Modal'

import {
  ConfirmTransactionModal,
  ErrorModal,
  TransactionConfirmingModal,
  TransactionSuccessModal,
} from '../modals'

const Withdraw = () => {
  const [inputValue, setInputValue] = useState('')
  const [modal, setModal] = useState()

  const {
    account,
    enlistedBalance,
    syndicateContract,
    updateTotalBalance,
    updateUserBalances,
  } = useContext(AppContext)

  const handleWithdrawClick = async (e) => {
    e.preventDefault()
    setModal(<ConfirmTransactionModal text="Check your wallet to confirm the withdrawal" />)
    const withdrawAmount = bnAmount(inputValue, 18)
    syndicateContract.methods.defect(withdrawAmount.toFixed()).send({
      from: account,
      // gasPrice: bnAmount(5, 9).toFixed(),
    })
      .once('transactionHash', hash => {
        setModal(<TransactionConfirmingModal />)
      })
      .on('error', error => {
        console.log(error)
        setModal(<ErrorModal error={error.toString()} onDismiss={() => setModal()} />)
      })
      .then(receipt => {
        const displayAmount = decAmount(withdrawAmount, 18)
        setModal(
          <TransactionSuccessModal
            onDismiss={() => setModal()}
            text={`Successfully deposited ${displayAmount} DAI.`}
          />
        )
        updateUserBalances()
        updateTotalBalance()
      })
  }

  const setMax = () => {
    setInputValue(decAmount(enlistedBalance, 18))
  }

  const handleChange = value => {
    if (!isNaN(value) && bnAmount(value, 18).lte(enlistedBalance) || !value) {
      setInputValue(value)
    }
  }

  return (
    <>
      <Container>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <H3>Withdrawal:</H3>
            <div>
              Available: {decAmount(enlistedBalance, 18)} DAI
            </div>
          </div>

          <Input
            actions={(
              <Button buttonType="light" onClick={setMax}>Max</Button>
            )}
            onChange={handleChange}
            value={inputValue}
          />
          <Hint>I am not as strong as I imagined. Sorry.</Hint>

          <Button
            buttonType="failure"
            disabled={!inputValue}
            onClick={handleWithdrawClick}
          >
            GET ME OUT.
          </Button>
        </div>
      </Container>
      {!!modal && (
        <Modal onDismiss={() => setModal()}>{modal}</Modal>
      )}
    </>
  )
}

export default Withdraw