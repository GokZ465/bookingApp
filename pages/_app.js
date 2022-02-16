import '../styles/styles.css'
import Layout from '../components/layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <noscript>You need to enable JavaScript to run this app</noscript>
    </>
  )
}

export default MyApp;