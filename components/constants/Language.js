import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [language, setLanguage] = useState("false");

    function switchLanguage() {
        setLanguage(!language);
        document.documentElement.setAttribute('lang', 'en');
        if (language === false) {
            document.documentElement.setAttribute('lang', 'no');
        }
        if (language === true) {
            document.documentElement.setAttribute('lang', 'en');
        }
    };

    return (
        <>
            <Link href={language ? '/english' : '/'}>
                <button
                    accessKey="l"
                    title={language ? "English" : "Norsk bokmål"}
                    type="button"
                    value={language ? "Change to English" : "Bytt til norsk bokmål"}
                    className={language ? "english" : "norsk"}
                    onClick={switchLanguage}
                >
                toggle language
                </button>
            </Link>
        </>
    )
}

export default Nav;