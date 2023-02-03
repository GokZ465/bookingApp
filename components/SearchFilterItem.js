export default function SearchFilterItem({ name, icon }) {

    return (
        <div className='filter-element'>
            <i className={`icons-outline fa-solid ${icon}`} />
            <span>{name}</span>
        </div>
    )
}
