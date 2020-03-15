import '../styles.css'
import React from "react";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
    return <div>
        <AppHeader />
        <Component {...pageProps} />
        <Footer />
    </div>
}