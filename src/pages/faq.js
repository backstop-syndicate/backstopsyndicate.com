import React from "react";
import Preview from "../components/Preview";
import Link from "next/link";

export default function Faq() {
    return (
        <div>
            <Preview />
            <div className={"faq-container"}>
                <h3>
                    What is the Dai Backstop Syndicate?
                </h3>
                <p>
                    The Dai Backstop Syndicate is a community effort to ensure the success of MakerDAO’s first ever “Flop Auction”. We are a group of DeFi enthusiasts who believe that MakerDAO and DAI are critcial infrastructure for our industry, and we have come together to support MakerDAO’s ongoing success.
                </p>

                <h3>
                    What is a Flop Auction?
                </h3>
                <p>
                    A Flop Auction occurs when the Multi-Collateral Dai (MCD) system has become undercollateralized. In this scenario, MakerDAO auctions their native token, MKR, in exchange for DAI. This brings the Multi-Collateral Dai system back to full collateralization, at the expense of dilution to MKR holders.
                </p>
                <h3>
                    How does the MCD system become under collateralized?
                </h3>
                <p>
                    Dai is collateralized by approved collateral types in the Multi-Collateral Dai system. The most prominent of which is Ether (symbol: ETH). If ETH ever falls dramatically in price, certain liquidations in the MCD system may occur below the value of the principal borrowed. As an example, say 150 USD in ETH was collateralized in order to mint 100 Dai. Say the value of the collateralized ETH then declines to 75. Even if the collateral is fully liquidated, it will result in under collateralization of the system.
                </p>
                <h3>
                    How does the Backstop Syndicate work?
                </h3>
                <p>
                    We are intending to be the buyer of last resort in the upcoming MKR auction. To make our intentions perfectly clear: <b>we do not believe we will win any of the MKR at auction. We believe we will be outbid by other auction participants</b>. Instead, we are provably committing to buying at a price of 100 DAI per MKR, as we believe this is a fair “buyer of last resort” price.
                </p>
                <h3>
                    Why did the syndicate choose a price of 100 Dai per MKR?
                </h3>
                <p>
                    We are intending to be a buyer of last resort. When the syndicate was created, the price of MKR was trading at 250 Dai per MKR. We considered 100 Dai per MKR to be an appropriate buyer-of-last-resort price.
                </p>
                <h3>
                    Why is the syndicate not supporting multiple prices?
                </h3>
                <p>
                    Because the social coordination required to support multiple prices is too extreme for this syndicate. It is easier and more socially scalable to align on a single price and stick to that buyer-of-last-resort price.
                </p>
                <h3>
                    Who can participate in the Backstop Syndicate?
                </h3>
                <p>
                    Anyone! Just deposit your Dai using this website:
                    <br />
                    <br />
                    <Link href="https://backstopsyndicate.com/">
                        <a>https://backstopsyndicate.com/</a>
                    </Link>
                </p>
                <h3>
                    Why should I contribute to the Backstop Syndicate vs. just bid on my own?
                </h3>
                <p>
                    Participation in the auctions requires a minimum of 50,000 Dai. Most contributors to the Backstop Syndicate do not have this amount of Dai, and as such the Syndicate is the only way for them to participate in the auctions. Additionally, you’ll get a commemorative POAP for participating in the Syndicate :)
                </p>
                <h3>
                    If I deposit Dai, am I guaranteed to win some MKR?
                </h3>
                <p>
                    No. We are participants in the auction, but there is no guarantee that the syndicate will win any MKR.
                </p>
                <h3>
                    If the syndicate does not win any MKR, can I get my Dai back?
                </h3>
                <p>
                    Of course! There are three scenarios:
                    <ol>
                        <li>The Syndicate does not win any bids — contributors get all of their Dai back</li>
                        <li>The Syndicate wins some bids, and has some MKR, some Dai at the end of the auction — contributors get Dai and MKR, proportionate to their contribution.</li>
                        <li>The full amount of Dai wins MKR — contributors get MKR, proportionate to their contribution</li>
                    </ol>
                </p>
                <h3>
                    I want to participate, but I don’t have Dai. How do I get Dai?
                </h3>
                <p>
                    You can buy Dai on several exchanges, both decentralized and centralized:
                    <ol>
                        <li>Dex.ag</li>
                        <li>Uniswap</li>
                        <li>Binance</li>
                        <li>OkEx</li>
                        <li>Bitfinex</li>
                    </ol>
                    Alternatively, you can open a Vault using ETH or USDC.
                </p>
                <h3>
                    Do I get anything as a contributor?
                </h3>
                <p>
                    Yes! Any contributor will get a commemorative POAP for being a member of the Syndicate.
                </p>

            </div>
            <style jsx>
                {`
                    .faq-container {
                        margin: auto;
                        width: 538px;
                        padding-top: 95px;
                        padding-bottom: 100px;
                    }
                    
                    .faq-container p {
                        font-style: normal;
                        font-size: 16px;
                        line-height: 22px;
                    }
                    
                    a {
                        color: white;
                    }
                    
                    h3 {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 24px;
                        margin: 40px 0px;
                        line-height: 30px;
                    }
                    
                    ol {
                        margin: 10px 0px;
                        list-style-type: decimal;
                    }
                    
                    .faq-container ol li {
                        list-style: decimal;
                        margin-left: 20px;
                    }
                `}
            </style>
        </div>
    );
}