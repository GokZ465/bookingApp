import Link from 'next/link'

export default function Establishment({ establishment }) {
    return (
        <div className='establishment'>
            <figure className='col-1'>
                <img src={establishment.imgURL} alt={`photo of ${establishment.name.replaceAll('-', ' ')}`} />
            </figure>
            <div className='col-2'>
                <span className='id'>{establishment.id}</span>
                <div className='location'>
                    <span className='line' />
                    <span className='txt' >{establishment.location}</span>
                </div>
                <h4 className='establishment-name'>{establishment.name.replaceAll('-', ' ')}</h4>
                <div className={`stars stars-${establishment.stars}`}>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                </div>
                <div className='establishment-description'>
                    {establishment.descriptionShort}
                </div>
                <Link href="/establishment/[id]" as={`/establishment/${establishment.id}`}>
                    <a className="btn-gold">learn more</a>
                </Link>
            </div>
        </div>
    )
}
