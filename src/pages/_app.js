import '../../public/styles.css'
import React from "react";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet" />
            </Head>
            <AppHeader />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}