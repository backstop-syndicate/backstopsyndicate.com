import Web3 from "web3";
import DaiConfig from "./daiConfig";

const node = process.env.NODEURL;
const web3 = new Web3(new Web3.providers.HttpProvider(node));

const getDaiBalance = async address => {
  try {
    const daiContract = new web3.eth.Contract(DaiConfig.abi, DaiConfig.address);

    const daiBalance = await daiContract.methods.balanceOf(address).call();

    if (daiBalance) {
      return Number(daiBalance) / Math.pow(10, DaiConfig.decimals);
    }
  } catch (e) {
    console.log("Error getting DAI balance: ", e);
  }
};

module.exports = getDaiBalance;
