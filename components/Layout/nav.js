import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useScrollListener from "../constants/ScrollListener"

const Nav = () => {
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push("--hide");
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);



    return (
        <>
            <div className={`deals ${navClassList.join(" ")} `}>
                Book now and get 10% off
                {/*&#128512; &#x1F60E;*/}
            </div>

            <nav className={`nav ${navClassList.join(" ")} `}>
                <Link passHref href='/'>
                    <a>
                        <img className='logo' src='/logo--white.png' alt='directlink to homepage' />
                    </a>
                </Link>
                <div className='nav-links-wrapper'>
                    <Link passHref href='./#search'>
                        <a className='search-icon'>
                            <span className='circle'/>
                            <span className='line'/>
                            <span className='arrow'/>
                        </a>
                    </Link>
                    <Link passHref href='/Login'>
                        <i className='icons-outline fa-solid fa-user' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;