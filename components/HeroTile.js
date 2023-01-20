export default function HeroTile({ type, icon }) {

    return (
        <div className='tile'>
            <div className='icon-container'>
                <i className={`icon icon-outline fa-solid ${icon}`} />
                <i className={`icon icon-fill fa-solid ${icon}`} />
            </div>
            <p>{type}</p>
        </div>
    )
}
