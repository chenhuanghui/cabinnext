// import '../loader.js'
import '../statics/masterbrand.css'
import '../statics/base.css'
import '../statics/index.css'
import '../statics/sell.css'
import '../statics/home.css'
import '../statics/store-list.css'
import '../statics/vendor_main.css'
import '../statics/article.css'
import '../statics/pricing.css'

import Router from "next/router";
import withFBQ from "next-fbq";

export default function App({ Component, pageProps }) {
    withFBQ("333677430949997", Router)
    return <Component {...pageProps} />
}