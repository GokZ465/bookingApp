import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import Stars from '../../components/Stars'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Person() {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.id && `/api/establishments/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const str = data.name.replaceAll('-', ' '); //replace dash with space
    const arr = str.split(' '); //split sentence into words

    for (var i = 0; i < arr.length; i++) { //capitalize first letter of each word
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const title = arr.join(' '); //put sentece back together

    return (
        <div className='establishment-page'>
            <Head>
                <title>{title}</title>
            </Head>

            <header className='establishments-hero' >
                <img src={`/${data.name}-hero.png`} alt={data.name.replaceAll('-', ' ')} />
                <div className='establishments-hero-txt'>
                    <span className='h1'>{data.name.replaceAll('-', ' ')}</span>
                    <Stars rating={data.stars} />
                </div>
            </header>
            <div className='establishment-banner'>
                <div className='icon-wrapper'>
                    <i className='fa-solid fa-user' />
                    <p>Up to {data.maxGuests} Guests</p>
                </div>
                <div className='icon-wrapper'>
                    <i className={data.iconOne} />
                    <p>{data.txtOne}</p>
                </div>
                <div className='icon-wrapper'>
                    <i className={data.iconTwo} />
                    <p>{data.txtTwo}</p>
                </div>
                <div className='price'>
                    <i className='fa-solid fa-euro-sign' />
                    <p>{data.price} per night</p>
                </div>
            </div>
            <article className='establishments-detail'>
                <div className='background'>{data.id}</div>
                <div className='detail'>
                    <div className='location'>
                        <span className='line' />
                        <span className='txt' >{data.location}</span>
                    </div>
                    <h1>{data.name.replaceAll('-', ' ')}</h1>
                    <p>{data.descriptionLong}</p>
                    <div className='btn-wrapper'>
                        <button className='btn-gold'>Book Now</button>
                        <button className='btn-gold'>Directions</button>
                    </div>
                </div>
            </article>
        </div>
    )
}
