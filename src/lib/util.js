import { BigNumber } from 'bignumber.js'

export const decAmount = (value, decimals, precision) => {
  const fixedValue = value.dividedBy(new BigNumber(10).pow(decimals)).toFixed(precision);
  return numberWithCommas(fixedValue);
};

export const bnAmount = (value, decimals) => {
  return new BigNumber(value).multipliedBy(new BigNumber(10).pow(decimals))
};

export const numberWithCommas = (x) => {
  x = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) {
    x = x.replace(pattern, "$1,$2");
  }

  return x;
}