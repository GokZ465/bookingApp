 export default function Stars({ rating }) {

    return (
        <div className={`stars stars-${rating}`}>
            <i className='fa-solid fa-star' />
            <i className='fa-solid fa-star' />
            <i className='fa-solid fa-star' />
            <i className='fa-solid fa-star' />
            <i className='fa-solid fa-star' />
        </div>
    )
}
