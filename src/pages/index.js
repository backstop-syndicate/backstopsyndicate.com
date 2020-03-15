import React from "react";
import Footer from "../components/Footer";
import AppHeader from "../components/AppHeader";
import Preview from "../components/Preview";
import Link from "next/link";

export default function Index() {
    return (
        <div>
            <Preview />
            <form className={"form-container"}>
                <div className={"deposit-container"}>
                    <label htmlFor="depositAmount">
                        Deposit DAI:
                    </label>
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
                <div className={"withdrawable-container"}>
                    <label htmlFor="withdawalButton">
                        Withdrawal:
                    </label>
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
                    label {
                        display: block;
                    }
                    
                    input {
                        width: 100%;
                        background: #433838;
                        border-radius: 3px;
                        height: 32px;
                        border: none;
                        color: #ffffff;
                        font-size: 14px;
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
                    
                    .success-links {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    
                    .withdrawable-container {
                        padding-top:60px;
                    }
                    
                    .button {
                        width: 100%;
                        border-radius: 3px;
                        font-size: 14px;
                        line-height: 32px;
                        cursor: pointer;
                    }
                    
                    .success {
                        background: #19BC9B;
                    }
                    
                    .failure {
                        background: #DD1C1A;
                    }
                    
                    a,  span, label, button {
                        color: #FFFFFF;
                        font-family: Futura;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                    }
                    
                    a {
                      text-decoration: underline;
                    }
                    
                    .success-links {
                        line-height: 45px;
                    }
                `}
            </style>
        </div>
    );
}