import React from "react";
import Logo from "./Logo";

export default function AppHeader() {
    return (
        <div className={"logo-header"}>
            <div>
                <Logo />
            </div>
            <div className={"logo-header-container"}>
                <h1 className={"logo-title"}>
                    DAI BACKSTOP SYNDICATE
                </h1>
                <span className={"logo-subtitle"}>
                    Made with <span className={"logo-subtitle-heart"}>♥</span> by the DeFi community
                </span>
            </div>
        </div>
    )
}