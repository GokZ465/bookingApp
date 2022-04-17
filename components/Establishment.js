import Link from 'next/link'

export default function Establishment({ establishment }) {
    return (
        <div className='establishment'>
            <figure className='col-1'>
                <img src={establishment.imgURL} alt={`photo of ${establishment.name}`} />
                <figcaption>{establishment.type}</figcaption>
            </figure>
            <div className='col-2'>
                <span className='id'>{establishment.id}</span>
                <div className='location'>
                    <span className='line' />
                    <span className='txt' >{establishment.location}</span>
                </div>
                <h4 className='establishment-name'>{establishment.name}</h4>
                <div className={establishment.stars}>
                    <div className='star-one' />
                    <div className='star-two' />
                    <div className='star-three' />
                    <div className='star-four' />
                    <div className='star-five' />
                </div>
                <div className='establishment-description'>
                {establishment.descriptionShort}
                </div>
                <Link href="/establishment/[id]" as={`/establishment/${establishment.id}`}>
                    <a className="btn-gold">
                        learn more
                    </a>
                </Link>
            </div>
        </div>
    )
}
