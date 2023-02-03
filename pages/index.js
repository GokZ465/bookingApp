import Head from 'next/head'
import useSWR from 'swr'
import Establishment from '../components/Establishment'
import HeroTile from '../components/HeroTile'
import SearchFilterItem from '../components/SearchFilterItem'

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
                        <HeroTile type='lodge' icon='fa-tree-city' />
                        <HeroTile type='cabin' icon='fa-mountain-city' />
                    </div>
                </header>

                <div id='search' className='filter-wrapper'>
                    <div className='filter'>
                        <SearchFilterItem name='location' icon='fa-location-dot' />
                        <SearchFilterItem name='check-in' icon='fa-calendar-days' />
                        <SearchFilterItem name='check-out' icon='fa-calendar-days' />
                        <SearchFilterItem name='rating' icon='fa-star' />
                    </div>
                    <div className='btn-wrapper'>
                        <button className='btn-gold'>
                            <span className='background' />
                            <span>learn more</span>
                        </button>
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