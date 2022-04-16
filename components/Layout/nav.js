import Link from 'next/link';

const Nav = () => {

    return (
        <>
            <div className='deals'>Book now and get 10% off</div>
            <nav className='nav'>
                <div className='logo'>
                    <Link passHref href='/'>
                        <a>
                            <img src='logo--white.svg' alt='' />
                        </a>
                    </Link>
                </div>
                <div className='nav-links-wrapper'>
                    <Link passHref href='#search'>
                        <a className='nav-links'>
                            <i className='css-icon search' />
                        </a>
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