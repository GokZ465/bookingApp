export default function SearchFilterItem({ name, icon }) {

    return (
        <div className='search-filter-item'>
            <i className={`fontawesome-outline fa-solid ${icon}`} />
            <span className='search-filter-item-name'>{name}</span>
        </div>
    )
}
