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
                <div className='nav-links'>
                    <Link passHref href='/contact'>
                        <a className='user-login'>
                            <i className='css-icon phone' />
                            Contact
                        </a>
                    </Link>
                    <Link passHref href='/login'>
                        <a className='user-login'>
                            <i className='css-icon user' />
                            User login
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;