import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { pathname } = ctx;
    const lang = pathname.startsWith("/en") ? "no" : "en";
    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <meta charSet="UTF-8" />
          {/* style */}
          <script async src="https://kit.fontawesome.com/a83d77d417.js" />
          {/* description and share */}
          <meta name="author" content="Tina Mary Holdcroft" />
          <meta name="keywords" content="Hotel Booking Bergen" />
          <meta
            property="image"
            content="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          />
          <meta
            property="og:image"
            content="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          />
          <meta
            name="description"
            content="Find Hotels, Bed and Breakfasts and Guesthouses in Bergen"
          />
          <meta
            property="og:description"
            content="Find Hotels, Bed and Breakfasts and Guesthouses in Bergen"
          />
          <meta property="url" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="" />
          {/* browser design */}
          <link rel="icon" sizes="16x16" href="favicon.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico" />
          <meta name="theme-color" content="#FFFFFF" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
