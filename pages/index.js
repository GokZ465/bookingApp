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
                    <img className='hero-index' src='holidaze-hero.png' alt='' />
                    <div className='hero-tiles'>
                        <div className='tile'>
                            <img src='icons/house.svg' alt='' />
                            <p>Guesthouses</p>
                        </div>
                        <div className='tile'>
                            <img src='icons/house.svg' alt='' />
                            <p>Guesthouses</p>
                        </div>
                        <div className='tile'>
                            <img src='icons/house.svg' alt='' />
                            <p>Guesthouses</p>
                        </div>
                        <div className='tile'>
                            <img src='icons/house.svg' alt='' />
                            <p>Guesthouses</p>
                        </div>
                        <div className='tile'>
                            <img src='icons/house.svg' alt='' />
                            <p>Guesthouses</p>
                        </div>
                        <div className='tile'>
                            <img src='icons/house.svg' alt='' />
                            <p>Guesthouses</p>
                        </div>
                    </div>
                </header>
                <div className='filter'>
                    <img src='icons/location-dot.svg' alt='' />
                </div>
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