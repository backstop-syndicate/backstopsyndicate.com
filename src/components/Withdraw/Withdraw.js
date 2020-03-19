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
    updateBalances,
  } = useContext(AppContext)

  const handleWithdrawClick = async (e) => {
    e.preventDefault()
    setModal(<ConfirmTransactionModal />)
    const withdrawAmount = bnAmount(inputValue, 18)
    console.log(withdrawAmount.toFixed())
    syndicateContract.methods.defect(withdrawAmount).send({
      from: account,
      gasPrice: bnAmount(5, 9).toFixed(),
    })
      .once('transactionHash', hash => {
        setModal(<TransactionConfirmingModal />)
      })
      .on('error', error => {
        console.log(error)
        setModal(error.toString())
      })
      .then(receipt => {
        const displayAmount = decAmount(withdrawAmount, 18)
        setModal(
          <TransactionSuccessModal
            onDismiss={() => setModal()}
            text={`Successfully deposited ${displayAmount} DAI.`}
          />
        )
        updateBalances()
      })
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
            type="number"
            onChange={value => setInputValue(value)}
            value={inputValue}
          />
          <Hint>I am not as strong as I imagined. Sorry.</Hint>

          <Button
            buttonType="failure"
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