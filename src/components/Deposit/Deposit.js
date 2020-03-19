import React, { useContext,  useState } from 'react'

import { BigNumber } from 'bignumber.js'
import Link from "next/link"

import Button from '../Button'
import Container from '../Container'
import H3 from '../H3'
import Hint from '../Hint'
import Input from '../Input'
import Modal from '../Modal'

import { bnAmount, decAmount } from '../../lib/util'
import { AppContext } from '../../context'

import {
  ConfirmApproveModal,
  ConfirmTransactionModal,
  ErrorModal,
  TransactionConfirmingModal,
  TransactionSuccessModal,
} from '../modals'

const Deposit = () => {
  const [inputValue, setInputValue] = useState('')
  const [modal, setModal] = useState()

  const {
    account,
    daiBalance,
    daiContract,
    syndicateContract,
    updateTotalBalance,
    updateUserBalances,
  } = useContext(AppContext)

  const handleDepositClick = async (e) => {
    e.preventDefault()
    const depositAmount = bnAmount(inputValue, 18)
    const allowance = new BigNumber(await daiContract.methods.allowance(
      account,
      syndicateContract.options.address
    ).call())
    if (depositAmount.gt(allowance)) {
      try {
        await handleNeedsApprove(depositAmount)
      } catch (e) {
        console.log(e)
        return setModal()
      }
    }
    handleDeposit(depositAmount)
  }

  // Start approve Dai flow
  const handleNeedsApprove = (amount) => {
    return new Promise((resolve, reject) => {
      const displayAmount = decAmount(amount, 18)
      setModal(
        <ConfirmApproveModal
          amount={displayAmount}
          onCancel={() => setModal()}
          onConfirm={() => onApprove(amount, resolve, reject)}
        />
      )
    })
  }
  const onApprove = (amount, resolve, reject) => {
    setModal(<ConfirmTransactionModal />)
    return daiContract.methods.approve(syndicateContract.options.address, amount.toFixed()).send({
      from: account,
      // gasPrice: bnAmount(5, 9).toFixed(),
    })
    .once('transactionHash', hash => {
      setModal(<TransactionConfirmingModal />)
    })
    .on('error', error => {
      reject(error)
    })
    .then(receipt => {
      resolve()
    })
  }

  const handleDeposit = (amount) => {
    setModal(<ConfirmTransactionModal />)

    return syndicateContract.methods.enlist(amount.toFixed()).send({
      from: account,
      // gasPrice: bnAmount(5, 9).toFixed(),
    })
    .once('transactionHash', hash => {
      console.log(hash)
      setModal(<TransactionConfirmingModal />)
    })
    .on('error', error => {
      setModal(<ErrorModal error={error.toString()} onDismiss={() => setModal()} />)
    })
    .then(receipt => {
      const displayAmount = decAmount(amount, 18)
      setModal(
        <TransactionSuccessModal
          onDismiss={() => setModal()}
          text={`Successfully deposited ${displayAmount} DAI.`}
        />
      )
      updateUserBalances()
      updateTotalBalance()
    })
    .catch(e => {
      console.log(e)
      setModal()
    })
  }

  const setMax = () => {
    setInputValue(decAmount(daiBalance, 18))
  }

  const handleChange = value => {
    if (!isNaN(value) && bnAmount(value, 18).lte(daiBalance) || !value) {
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
            <H3>Deposit DAI:</H3>
            <div>
              Available: {decAmount(daiBalance, 18)} DAI
            </div>
          </div>
          <Input
            actions={(
              <Button buttonType="light" onClick={setMax}>Max</Button>
            )}
            onChange={handleChange}
            value={inputValue}
          />
          <Hint>I am the hero Defi needs. I am ready to to contribute</Hint>
          <Button
            buttonType="success"
            disabled={!inputValue}
            onClick={handleDepositClick}
          >
            GO!
          </Button>
          <span className={"success-links"}>
            <Link href={"/faq/"}>
              <a>See participation rewards</a>
            </Link>
            <a href={"https://backstopsyndicate.eth/"}>
              backstopsyndicate.eth
              </a>
          </span>
        </div>
      </Container>
      {!!modal && (
        <Modal onDismiss={() => setModal()}>{modal}</Modal>
      )}
      <style jsx>
        {`
          a,  span, label, button {
            color: #FFFFFF;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
          }
          a {
            text-decoration: underline;
            line-height: 60px;
          }
          .success-links {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}

export default Deposit