import React from 'react'
import BigNumber from 'bignumber.js'

export const AppContext = React.createContext({
  account: null,
  daiBalance: new BigNumber(0),
  daiContract: null,
  enlistedBalance: new BigNumber(0),
  syndicateContract: null,
  totalDaiBalance: new BigNumber(),
  updateTotalBalance: () => {},
  updateUserBalances: () => {},
  web3: null
})