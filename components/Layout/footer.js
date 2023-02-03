import React from 'react'
import Link from 'next/link'

const Footer = () => (
    <div className='footer'>
        <div className='footer-col-1'>
            <Link passHref href='/'>
                <img className='logo' src='/logo--white.png' alt='directlink to homepage' />
            </Link>
            <p>The purpose of this website is to promote Bergen as a travel destination.</p>
            <p>© 2021 Holidaze, All rights reserved</p>
            <div className='SoMe'>
                <a title='Messenger' target='_blank' rel='noreferrer' href='https://www.messenger.com/'><i className='fab fa-facebook-messenger' /></a>
                <a title='YouTube' target='_blank' rel='noreferrer' href='https://www.youtube.com/'><i className='fab fa-youtube' /></a>
                <a title='Twitter' target='_blank' rel='noreferrer' href='https://twitter.com/'><i className='fab fa-twitter' /></a>
            </div>
        </div>

        <div className='footer-col-2'>
            <div>
                <h6>For Guests</h6>
                <Link href='/'>Contact Us</Link>
            </div>
            <div>
                <h6>For Businesses</h6>
                <Link href='/'>Login</Link>
                <Link href='/'>Register</Link>
                <Link href='/'>Support</Link>
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
)

export default Footer;