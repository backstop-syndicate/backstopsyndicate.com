import { BigNumber } from 'bignumber.js'

export const decAmount = (value, decimals, precision) => {
  const fixedValue = value.dividedBy(new BigNumber(10).pow(decimals)).toFixed(precision);
  return fixedValue;
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
};

export const getHolders = async (contract) => {
  let holders = {};
  const nullAddress = "0x0000000000000000000000000000000000000000";

  let options = {
    fromBlock: 9700025,
    toBlock: 'latest'
  };

  let events = await contract.getPastEvents("Transfer", options);

  let unique = new Set();

  events.forEach((event) => {
      let { returnValues: { from, to, value } } = event;

      // incoming == 1, out == 0
      let incoming = from === nullAddress ? true : false;

      if (incoming) {
        let address = to;

        unique.add(address);

        if (holders[address]) {
          holders[address] = holders[address].plus(value);
        } else {
          holders[address] = new BigNumber(value)
        }
      } else {
        let address = from;

        unique.add(address);

        if (holders[address]) {
          holders[address] = holders[address].minus(value);
        } else {
          holders[address] = new BigNumber(value)
        }
      }
  });

  Object.keys(holders).forEach((address) => {
    holders[address] = decAmount(holders[address], 18)
  });

  return holders;
};

