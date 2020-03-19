import { BigNumber } from 'bignumber.js'

export const decAmount = (value, decimals, precision) => {
  return value.dividedBy(new BigNumber(10).pow(decimals)).toFixed(precision)
}

export const bnAmount = (value, decimals) => {
  return new BigNumber(value).multipliedBy(new BigNumber(10).pow(decimals))
}