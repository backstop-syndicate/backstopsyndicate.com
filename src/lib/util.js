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

export const getHolders = async () => {
  let data = localStorage.getItem('holders');

  if (data) {
    data = JSON.parse(data);
  }

  if (!data || lessThanOneMinuteAgo(new Date(data.date))) {
    let holders = await getTokenData();

    localStorage.setItem('holders', JSON.stringify({
      date: new Date(),
      holders
    }));

    return holders;

  } else {
    return data.holders;
  }
};

const getTokenData = async () => {
  const address = "0x00000000357646e36fe575885bb3e1a0772e64cc";

  let data = await fetch('https://api.ethplorer.io/getAddressInfo/0xa1d3c765e9a9655e8838bc4a9b16d5e6af024321?apiKey=freekey', { mode: 'cors' });
  data = await data.json();

  let tokens = data.tokens;
  let backstopToken = tokens.filter((token) => {
    return token.tokenInfo.address === address
  });

  if (backstopToken.length) {
    let token = backstopToken[0].tokenInfo;

    return token.holdersCount;
  } else {
    return 0;
  }
};

const lessThanOneMinuteAgo = (date) => {
  const ONE_MINUTE =  60 * 1000;
  const aMinuteAgo = Date.now() - ONE_MINUTE;

  return date < aMinuteAgo;
};

// let options = {
//   fromBlock: 9700025,
//   toBlock: 'latest'
// };

// let events = await contract.getPastEvents("Transfer", options);
//
// let holders = {};
// const nullAddress = "0x0000000000000000000000000000000000000000";
//
// events.forEach((event) => {
//     let { returnValues: { from, to} } = event;
//     if (from === nullAddress) {
//         console.log("Out");
//     } else if (to === nullAddress) {
//         console.log("in");
//     }
// });