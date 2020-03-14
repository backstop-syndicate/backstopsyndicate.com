import logoImage from "../images/flat-logo.png";
import React from "react";

export default function Logo() {
    return (
        <img className="logo" src={logoImage} alt={"Logo"} />
    )
}