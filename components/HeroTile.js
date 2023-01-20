export default function HeroTile({ type, icon }) {

    return (
        <div className='tile'>
            <i className={`icons-outline ${icon}`} />
            <p>{type}</p>
        </div>
    )
}
