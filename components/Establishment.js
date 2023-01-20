import Link from 'next/link'
import Stars from './Stars'

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
                <Stars rating={establishment.stars} />
                <div className='establishment-description'>
                    {establishment.descriptionShort}
                </div>
                <Link href='/establishment/[id]' as={`/establishment/${establishment.id}`}>
                    <a className='btn-gold'>
                        <span className='background'></span>
                        <span>learn more</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}
