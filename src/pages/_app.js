import '../styles.css'
import React from "react";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return <div>
        <Head>
            <link key={"shortcut-favicon"} rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link key={"favicon"} rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <AppHeader />
        <Component {...pageProps} />
        <Footer />
    </div>
}