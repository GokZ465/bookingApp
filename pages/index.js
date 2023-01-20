import Head from 'next/head'
import useSWR from 'swr'
import Establishment from '../components/Establishment'
import HeroTile from '../components/HeroTile'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/establishments', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Head>
                <title>Holidaze</title>
                <meta property='og:title' content='Holidaze' />
                <link rel='icon' href='/favicon.svg' />
            </Head>

            <>
                <header>
                    <img className='hero-index' src='holidaze-hero.png' alt='' />
                    <div className='hero-tile-container'>
                        <HeroTile type='hotel' icon='fa-hotel' />
                        <HeroTile type='B &#38; B' icon='fa-mug-saucer' />
                        <HeroTile type='hostel' icon='fa-bed' />
                        <HeroTile type='apartment' icon='fa-building' />
                        <HeroTile type='Lodge' icon='fa-tree-city' />
                        <HeroTile type='Cabin' icon='fa-mountain-city' />
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