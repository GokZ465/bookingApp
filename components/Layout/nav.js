import Link from 'next/link';

const Nav = () => {

    return (
        <>
            <div className='deals'>Book now and get 10% off</div>
            <nav className='nav'>
                <div className='logo'>
                    <Link href='/'>
                        <img src='logo--white.svg' alt='' />
                    </Link>
                </div>
                <div className='nav-links-wrapper'>
                    <Link passHref href='#search'>
                        <div className='nav-links'>
                            <i className='css-icon search' />
                        </div>
                    </Link>
                    <Link passHref href='/'>
                        <a className='nav-links'>
                            <i className='css-icon user' />
                        </a>
                    </Link>
                    <Link passHref href='/login'>
                        <a className='nav-links'>
                            <i className='css-icon house' />
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;