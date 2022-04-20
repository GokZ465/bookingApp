import Head from 'next/head'
import useSWR from 'swr'
import Establishment from '../components/Establishment'

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
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <>
                <header>
                    <img className='hero-index' src='holidaze-hero.png' alt='' />
                    <div className='hero-tiles'>
                        <div className='tile'>
                            <i className='icons-outline fa-solid fa-hotel' />
                            <p>Hotel</p>
                        </div>
                        <div className='tile'>
                            <i className='icons-outline fa-solid fa-mug-saucer' />
                            <p>B &#38; B</p>
                        </div>
                        <div className='tile'>
                            <i className='icons-outline fa-solid fa-bed' />
                            <p>Hostel</p>
                        </div>
                        <div className='tile'>
                            <i className='icons-outline fa-solid fa-building' />
                            <p>Appartment</p>
                        </div>
                        <div className='tile'>
                            <i className='icons-outline fa-solid fa-tree-city' />
                            <p>Lodge</p>
                        </div>
                        <div className='tile'>
                            <i className='icons-outline fa-solid fa-mountain-city' />
                            <p>Cabin</p>
                        </div>
                    </div>
                </header>

                <div id='search' className='filter-wrapper'>
                    <div className='filter'>
                        <div className='filter-element'>
                            <i className='icons-outline fa-solid fa-location-dot' />
                            <span>Location</span>
                        </div>

                        <div className='filter-element'>
                            <i className='icons-solid fa-solid fa-calendar-days' />
                            <span>Check-in</span>
                        </div>

                        <div className='filter-element'>
                            <i className='icons-solid fa-solid fa-calendar-days' />
                            <span>Check-out</span>
                        </div>

                        <div className='filter-element'>
                            <i className='icons-outline fa-solid fa-star' />
                            <span>Rating</span>
                        </div>
                    </div>
                    <div className='btn-wrapper'>
                        <button className='btn-gold'>search</button>
                    </div>
                </div>

                <div className='establishments-wrapper'>
                    {data.map((p, i) => (
                        <Establishment key={i} establishment={p} />
                    ))}
                </div>
            </>
        </>
    )
}