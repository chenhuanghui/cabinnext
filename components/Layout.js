import Head from 'next/head'
import Header from './Header'
import Hero from './sections/Hero'
import Pillars from './sections/Pillars'
import Copyrights from './sections/Copyrights'
import Footer from './Footer'
import BackgroundGreen from './sections/BacgroundGreen'
import Support from './sections/Support'

const Layout = props => (
    <div className="layout">
        <Head>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="author" content="SemiColonWeb" />
            <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/masterbrand-12d9bf8602c9e16769a8ff8a1177e4238d9413d73d9dd7678796641e912282fa.css" />
            <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/home/index-72e8f7e85d965b49c9307d648b07104daf053fb6e3c5fafc4e3c20c0abd96957.css" />
            <title>Articles | Canvas</title>
        </Head>

        <body className="page--home">
            <div id="Announcements">
                <div className="covid-19-announcement-banner"> 
                    <section className="announcement js-announcement is-active">
                        <div className="announcement__content">
                            The world needs independent businesses.
                            <a className="body-link" href="covid19.html">Learn about the actions we’re taking to address the impact of&nbsp;COVID&#8209;19</a>
                        </div>
                        {/* <button name="button" type="button" className="announcement__close js-announcement__close"> */}
                            {/* <svg className="icon announcement__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-close" /></svg> */}
                        {/* </button> */}
                    </section>
                </div>
            </div>

            {/* <!-- Header */}
            <Header />
            <div id="PageContainer">
                <main id="Main">
                    <Hero />
                    <BackgroundGreen />
                    <Pillars />
                    <Support />
                </main>
                <Footer />
            </div>


        </body>
    </div>
)

export default Layout;