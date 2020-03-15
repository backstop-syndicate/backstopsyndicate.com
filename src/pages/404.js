import React from "react";
import Preview from "../components/Preview";

export default function Faq() {
    return (
        <div>
            <Preview />
            <div className={"not-found-container"}>
                <h1>
                    404 - Page not found
                </h1>
            </div>
            <style jsx>
                {`
                    .not-found-container {
                        margin: auto;
                        width: 538px;
                        padding-top: 95px;
                        padding-bottom: 100px;
                    }
                    
                    h1 {
                        text-align: center;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 40px;
                        line-height: 60px;
                    }
                `}
            </style>
        </div>
    );
}