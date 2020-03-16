import React from "react";
import Footer from "../components/Footer";
import AppHeader from "../components/AppHeader";
import Preview from "../components/Preview";
import DEXAG from "dexag-sdk";
import Link from "next/link";

let timer;
const checkPrice = async () => {
    clearTimeout(timer);
    const toAmount = document.getElementById("buyAmount").value;
    if (toAmount) {
        timer = setTimeout(async () => {
            try {
                const dexagResponse = await fetch(`https://api-v2.dex.ag/price?from=ETH&to=DAI&toAmount=${toAmount}&dex=ag&tradable=true`);
                const price = await dexagResponse.json();
                document.getElementById("costAmount").innerText = (Number(toAmount) * Number(price.price)).toFixed(2);
            } catch (e) {
                console.log("Error getting DEXAG price: ", e);
            }
        }, 500);
    }
}

const buyDai = async (e) => {
    e.preventDefault();
    if (window.ethereum) {
        const dexag = DEXAG.fromProvider(window.ethereum);
        const toAmount = document.getElementById("buyAmount").value;
        if (toAmount) {
            try {
                document.getElementById("buyButton").innerText = "Getting Trade...";
                const dexagPriceResponse = await fetch(`https://api-v2.dex.ag/price?from=ETH&to=DAI&toAmount=${toAmount}&dex=ag&tradable=true`);
                const price = await dexagPriceResponse.json();
                const limitAmount = Number(toAmount) * Number(price.price) * 1.005;
                const dexagResponse = await fetch(`https://api-v2.dex.ag/trade?from=ETH&to=DAI&toAmount=${toAmount}&limitAmount=${limitAmount}&dex=ag`);
                const trade = await dexagResponse.json();
                const valid = await dexag.validate(trade);
                if (valid) {
                    document.getElementById("buyButton").innerText = "Buying DAI...";
                    await dexag.trade(trade);
                }
                document.getElementById("buyButton").innerText = "BUY THE DAI";
            } catch (e) {
                document.getElementById("buyButton").innerText = "BUY THE DAI";
                console.log("Error buying DAI: ", e);
            }
        }
    }
}

export default function Index() {
    return (
        <div>
            <Preview />
            <form className={"form-container"}>
                <div className={"deposit-container"}>
                    <h3>
                        Deposit DAI:
                    </h3>
                    <input
                        type="number"
                        name="depositAmount"
                        id="depositAmount"
                        defaultValue={""}
                    />
                    <span className={"hint"}>I am the hero Defi needs. I am ready to to contribute</span>
                    <button className={"button success"}>GO!</button>
                    <span className={"success-links"}>
                        <Link href={"/faq/"}>
                            <a>See participation rewards</a>
                        </Link>
                        <a href={"https://backstopsyndicate.eth/"}>
                            backstopsyndicate.eth
                        </a>
                    </span>
                </div>
                <br />
                <div className={"buy-container"}>
                    <span className={"hint"}>
                        Need DAI? Buy it here.
                    </span>
                    <div className={"buy-widget-container"}>
                        <div htmlFor="buyAmount" className="buy-label">I want </div>
                        <input
                            type="number"
                            name="buyAmount"
                            id="buyAmount"
                            defaultValue={""}
                            className="buyAmount"
                            onChange={(e) => {checkPrice(e)}}
                        />
                        <div className="buy-label">
                            DAI
                        </div>
                    </div>
                    <div className={"cost-widget-container"}>
                        <div className="buy-label">For </div>
                        <div
                            name="costAmount"
                            id="costAmount"
                            readOnly
                            className="costAmount"
                        />
                        <div className="buy-label">
                            ETH
                        </div>
                    </div>

                    <span className={"hint"}>Ok, let's do this</span>
                    <button className={"button buy"} id="buyButton" onClick={(e) => {buyDai(e)}}>BUY THE DAI</button>
                    <div className={"dexag"}>
                        <span className={"hint"}>Powered by <a href="https://dex.ag" target="_blank">DEX.AG</a></span>
                    </div>
                </div>
                <div className={"withdrawable-container"}>
                    <h3>
                        Withdrawal:
                    </h3>
                    <span className={"hint"}>I am not as strong as I imagined. Sorry.</span>
                    <button
                        className={"button failure"}
                        name="withdawalButton"
                        id="withdawalButton"
                    >GET ME OUT.</button>
                </div>

            </form>
            <style jsx>
                {`

                    input {
                        background: #433838;
                        border-radius: 3px;
                        height: 32px;
                        border: none;
                        color: #ffffff;
                        font-size: 14px;
                    }

                    input#depositAmount {
                        width: calc(100% - 20px);
                        background: #433838;
                        border-radius: 3px;
                        height: 32px;
                        border: none;
                        color: #ffffff;
                        font-size: 14px;
                        padding-left: 20px;
                    }

                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    input[type=number] {
                        -moz-appearance: textfield;
                    }

                    .hint, label {
                        line-height: 60px;
                    }

                    .form-container {
                        margin: auto;
                        width: 450px;
                        padding-top: 80px;
                        padding-bottom: 100px;
                    }

                    .buy-container {

                    }

                    .buy-label {
                        width: 60px;
                        line-height: 34px;
                    }

                    .buy-widget-container, .cost-widget-container {
                        display: flex;
                        flex-direction: row;
                    }

                    .buy-widget-container {
                      margin-bottom: 10px;
                    }

                    .buyAmount {

                    }

                    #buyAmount, #costAmount {
                      width: 102px;
                      margin-right: 10px;
                      padding-right: 10px;
                      text-align: right;
                      font-family: Futura;
                      font-style: normal;
                      font-weight: 500;
                      font-size: 14px;
                    }

                    #costAmount {
                      line-height: 32px;
                    }


                    .success-links {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .withdrawable-container {
                        padding-top:60px;
                    }

                    .dexag {
                        float: right;
                    }

                    .button {
                        width: 100%;
                        border-radius: 3px;
                        font-size: 14px;
                        line-height: 32px;
                        cursor: pointer;
                        border: none;
                    }

                    .button:hover {
                        opacity: .6;
                    }

                    .success {
                        background: #19BC9B;
                    }

                    .buy {
                        background: #FCA060;
                    }

                    .failure {
                        background: #DD1C1A;
                    }

                    a,  span, label, button {
                        color: #FFFFFF;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                    }

                    a {
                      text-decoration: underline;
                    }

                    h3 {
                      line-height: 50px;
                    }

                    .success-links {
                        line-height: 45px;
                    }
                `}
            </style>
        </div>
    );
}
