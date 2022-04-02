import Link from 'next/link';

const Nav = () => {

    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/'>User login</Link>
            <Link href='/'>Accommodations</Link>
            <Link href='/'>Contact</Link>
        </nav>
    )
}

export default Nav;