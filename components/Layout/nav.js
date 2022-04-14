import Link from 'next/link';

const Nav = () => {

    return (
        <>
                        <div className='deals'>Book now and get 10% off</div>
            <nav className='nav'>

                <div className='logo'>
                    <Link href='/'>
                        <img src='logo--blue.svg' alt='' />
                    </Link>
                </div>
                <div className='nav-links'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Accommodations</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>User login</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;