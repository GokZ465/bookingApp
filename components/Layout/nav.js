import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useScrollListener from '../constants/ScrollListener'

const Nav = () => {
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('--hide');
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);



    return (
        <>
            <div className={`deals ${navClassList.join(' ')} `}>Book now and get 10% off</div>

            <nav className={`nav ${navClassList.join(' ')} `}>
                <Link passHref href='/'>
                    <img className='logo' src='/logo--white.png' alt='directlink to homepage' />
                </Link>
                <div className='nav-links-wrapper'>
                    <Link passHref href='./#search'>
                        <a className='search-icon'>
                            <span className='circle' />
                            <span className='line' />
                            <span className='arrow' />
                        </a>
                    </Link>
                    <Link passHref href='/Login'>
                        <i className='fa-solid fa-user fontawesome-gold' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;