import Mode from '../constants/Mode'
import Language from '../constants/Language'
import Link from 'next/link';

const Nav = () => {

    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/'>User login</Link>
            <Link href='/'>Accommodations</Link>
            <Link href='/'>Contact</Link>
            <Mode />
            <Language/>
        </nav>
    )
}

export default Nav;