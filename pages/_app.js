import '../public/assets/css/masterbrand.css'
import '../public/assets/css/base.css'
import '../public/assets/css/index.css'
import '../public/assets/css/sell.css'
import '../public/assets/css/home.css'
import '../public/assets/css/store-list.css'
import '../public/assets/css/vendor_main.css'
import '../public/assets/css/pricing.css'
import '../public/assets/css/style.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

App.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {}
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx)
    }
    return { 
        pageProps: {...pageProps}
    }
}