import React from 'react'
import Link from 'next/link'

const Footer = () => (
    <div className='footer'>
        <div className='footer-col-1'>
            <Link href='/'>
                <>
                    <div className='footer-img'></div>
                    <h1>Holidaze</h1>
                </>
            </Link>
            <p>The purpose of this website is to promote Bergen as a travel destination.</p>
            <p>© 2021 Holidaze, All rights reserved</p>
            <div className='SoMe'>
                <a title='Messenger' target='_blank' rel='noreferrer' href='https://www.messenger.com/'><i className='fab fa-facebook-messenger'></i></a>
                <a title='YouTube' target='_blank' rel='noreferrer' href='https://www.youtube.com/'><i className='fab fa-youtube'></i></a>
                <a title='Twitter' target='_blank' rel='noreferrer' href='https://twitter.com/'><i className='fab fa-twitter'></i></a>
            </div>
        </div>
        <div className='footer-col-2'>
            <div>
                <h6>Contact</h6>
                <Link href='/'>Contact Us</Link>
                <a title='Messenger' href='https://www.messenger.com/'>Messenger</a>
                <a title='E-mail us' href='mailto:contact@holidaze.com'>E-mail</a>
                <Link href='/'>Admin Login</Link>
                <Link href='/'>Admin Register</Link>
            </div>
            <div>
                <h6>Accommodations</h6>
                <Link href='/'>Search</Link>
                <Link href='/'>Hotels</Link>
                <Link href='/'>Bed and Breakfasts</Link>
                <Link href='/'>Guesthouses</Link>
            </div>
            <div>
                <h6>Follow Us</h6>
                <a title='Messenger' target='_blank' rel='noreferrer' href='https://www.messenger.com/'>Facebook</a>
                <a title='YouTube' target='_blank' rel='noreferrer' href='https://www.youtube.com/'>LinkedIn</a>
                <a title='Twitter' target='_blank' rel='noreferrer' href='https://twitter.com/'>Twitter</a>
            </div>
        </div>

        <div className='footer-col-3'>
            <h6>Newsletter</h6>
            <p>Stay up to date on all events and special deals in Bergen by subscribing to our newsletter</p>
            {/*<Newsletter/>*/}
        </div>
    </div>
);

export default Footer;