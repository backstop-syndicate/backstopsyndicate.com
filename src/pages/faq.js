import React from "react";

export default function Faq() {
    return (
        <div>
            <div className={"faq-container"}>
                <h3>
                    What does a headline look like? Oh this.
                </h3>
                <p>
                    oh ok like this. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
                <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
                <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <style jsx>
                {`
                    .faq-container {
                        margin: auto;
                        width: 538px;
                        padding-top: 95px;
                        padding-bottom: 180px;
                    }
                    
                    h3 {
                        font-family: Futura;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 22px;
                        line-height: 60px;
                    }
                `}
            </style>
        </div>
    );
}