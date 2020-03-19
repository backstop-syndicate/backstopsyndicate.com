import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import WalletIcon from '@material-ui/icons/AccountBalanceWallet'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PublishIcon from '@material-ui/icons/Publish'
import DoneIcon from '@material-ui/icons/Done'

import Button from '../Button'
import H3 from '../H3'

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#086788',
  },
  barColorPrimary: {
    backgroundColor: '#0daee6',
  },
})(LinearProgress)

const ModalIcon = ({ icon }) => (
  <div style={{
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 72,
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    height: 72,
    margin: '0 auto 12px',
    width: 72,
  }}>
    {icon}
  </div>
)

const ModalActions = ({ children }) => (
  <div style={{
    backgroundColor: 'rgba(0,0,0,0.25)',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 -24px -24px',
    padding: '12px 24px',
  }}>
    {children}
  </div>
)

const ModalContent = ({ children }) => (
  <div style={{ marginTop: 24, marginBottom: 24 }}>
    {children}
  </div>
)

export const ConfirmApproveModal = ({ amount, onConfirm }) => (
  <>
    <ModalIcon icon={<LockOpenIcon />} />
    <ModalContent>
      <H3>You need to approve {amount} DAI before depositing.</H3>
    </ModalContent>
    <ModalActions>
      <div>
        <Button
          buttonType="success"
          onClick={onConfirm}
        >
          Approve DAI
        </Button>
      </div>
    </ModalActions>
  </>
)

export const ConfirmTransactionModal = () => (
  <>
    <ModalIcon icon={<WalletIcon />} />
    <ModalContent>
      <H3>Check your wallet to confirm this transaction.</H3>
    </ModalContent>
  </>
)

export const TransactionConfirmingModal = () => (
  <>
    <ModalIcon icon={<PublishIcon />} />
    <ModalContent>
      <H3>Please wait while your transaction confirms.</H3>
      <ColorLinearProgress />
    </ModalContent>
  </>
)

export const TransactionSuccessModal = ({ onDismiss, text }) => (
  <>
    <ModalIcon icon={<DoneIcon />} />
    <ModalContent>
      <H3>{text}</H3>
    </ModalContent>
    <ModalActions>
      <div>
        <Button
          buttonType="success"
          onClick={onDismiss}
        >
          Finish
        </Button>
      </div>
    </ModalActions>
  </>
)