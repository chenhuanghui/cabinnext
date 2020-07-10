import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="/static/intercom.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument