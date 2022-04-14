import Head from 'next/head'
import useSWR from 'swr'
import Establishment from '../components/Establishment'
import RegistrationForm from './RegistrationForm/index'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/establishments', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Head>
                <title>Holidaze</title>
                <meta property="og:title" content="Holidaze" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <>
            <header>
                <img src='hero.svg' alt=''/>
            </header>
                <RegistrationForm />
                <div>
                    {data.map((p, i) => (
                        <Establishment key={i} establishment={p} />
                    ))}
                </div>
            </>
        </>
    )
}