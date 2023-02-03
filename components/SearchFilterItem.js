export default function SearchFilterItem({ name, icon }) {

    return (
        <div className='filter-element'>
            <i className={`fontawesome-gold fa-solid ${icon}`} />
            <span>{name}</span>
        </div>
    )
}
