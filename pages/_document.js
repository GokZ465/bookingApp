import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const { pathname } = ctx;
        const lang = pathname.startsWith("/en") ? "en-us" : "no";
        return { ...initialProps, lang }
    }

    render() {
        
        const { lang } = this.props;

        return (
            <Html lang={lang}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* style */}
                    <script async src="https://kit.fontawesome.com/a83d77d417.js" />
                    {/* description and share */}
                    <meta name="author" content="Tina Mary Holdcroft" />
                    <meta name="keywords" content="" />
                    <meta property="image" content="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" />
                    <meta property="og:image" content="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" />
                    <meta property="og:title" content="" />
                    <meta name="description" content="" />
                    <meta property="og:description" content="" />
                    <meta property="url" content="" />
                    <meta property="og:url" content="" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="" />
                    {/* browser design */}
                    <link id="favicon" rel="icon" href="/icons/favicon.svg" />
                    <meta name="theme-color" content="#FFFFFF" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;