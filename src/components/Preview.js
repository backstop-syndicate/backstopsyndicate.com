import PreviewImage from "../images/flat-logo.png";
import Head from 'next/head'
import React from "react";

export default function Preview({
    card="Summary",
    title="Backstop Syndicate",
    description="The homepage for the Backstop Syndicate"
}) {
    return (
        <Head>
            <title>Backstop Syndicate</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="https://https://backstopsyndicate.com/" />
            <meta property="og:image" content="https://backstopsyndicate.com/preview.jpg" />
            <meta name="twitter:card" content={card} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://backstopsyndicate.com/preview.jpg" />
        </Head>
    )
}