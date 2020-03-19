import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import WalletIcon from '@material-ui/icons/AccountBalanceWallet'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import SyncIcon from '@material-ui/icons/SyncAlt'
import DoneIcon from '@material-ui/icons/Done'
import WarningIcon from '@material-ui/icons/Warning'

import Button from '../Button'

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

export const ErrorModal = ({ error, onDismiss }) => (
  <>
    <ModalIcon icon={<WarningIcon />} />
    <ModalContent>
      <span>{error}</span>
    </ModalContent>
    <ModalActions>
      <div style={{ display: 'flex'}}>
        <Button
          buttonType="light"
          onClick={onDismiss}
        >
          OK
        </Button>
      </div>
    </ModalActions>
  </>
)

export const ConfirmApproveModal = ({ amount, onCancel, onConfirm }) => (
  <>
    <ModalIcon icon={<LockOpenIcon />} />
    <ModalContent>
      <span>You need to approve {amount} DAI before depositing.</span>
    </ModalContent>
    <ModalActions>
      <div style={{ display: 'flex'}}>
        <Button buttonType="light" onClick={onCancel}>Cancel</Button>
        <div style={{ width: 8 }} />
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

export const ConfirmTransactionModal = ({ text }) => (
  <>
    <ModalIcon icon={<WalletIcon />} />
    <ModalContent>
      <span>{text}</span>
    </ModalContent>
  </>
)

export const TransactionConfirmingModal = () => (
  <>
    <ModalIcon icon={<SyncIcon />} />
    <ModalContent>
      <span>Please wait while your transaction confirms.</span>
      <div style={{ height: 24 }} />
      <ColorLinearProgress />
    </ModalContent>
  </>
)

export const TransactionSuccessModal = ({ onDismiss, text }) => (
  <>
    <ModalIcon icon={<DoneIcon />} />
    <ModalContent>
      <span>{text}</span>
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