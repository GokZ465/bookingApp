import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'

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
    const arr = str.split(" "); //split sentence into words

    for (var i = 0; i < arr.length; i++) { //capitalize first letter of each word
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const title = arr.join(" "); //put sentece back together

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <header className='establishments-hero' >
                <img src={`/${data.name}-hero.png`} alt={data.name.replaceAll('-', ' ')} />
                <div className='establishments-hero-txt'>
                    <h1>{data.name.replaceAll('-', ' ')}</h1>
                    <div className={`stars stars-${data.stars}`}>
                        <div className='one' />
                        <div className='two' />
                        <div className='three' />
                        <div className='four' />
                        <div className='five' />
                    </div>
                </div>
            </header>

            <article className='establishments-detail'>
                <h1>{data.name.replaceAll('-', ' ')}</h1>
                <p>{data.descriptionLong}</p>
            </article>
        </>
    )
}
