import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function AppHeader() {
    return (
        <div className={"logo-header"}>
            <Link href="/">
                <div className={"clickable"}>
                    <Logo />
                </div>
            </Link>

            <div className={"logo-header-container"}>
                <Link href="/">
                    <h1 className={"logo-title clickable"}>
                        DAI BACKSTOP SYNDICATE
                    </h1>
                </Link>

                <span className={"logo-subtitle"}>
                    Made with <span className={"logo-subtitle-heart"}>♥</span> by the DeFi community
                </span>
            </div>
            <style jsx>
                {
                    `
                        .clickable {
                            cursor: pointer;
                        } 
                    `
                }
            </style>
        </div>
    )
}