import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [language, setLanguage] = useState("false");

    function switchLanguage() {
        setLanguage(!language);
        document.documentElement.setAttribute('lang', 'no');
        if (language === false) {
            document.documentElement.setAttribute('lang', 'en');
        }
        if (language === true) {
            document.documentElement.setAttribute('lang', 'no');
        }
    };

    return (
        <>
            <Link href={language ? '/norwegian' : '/'}>
                <button
                    accessKey="l"
                    title={language ? "Norsk bokmål" : "English"}
                    type="button"
                    value={language ? "Bytt til norsk bokmål" : "Change to English"}
                    className={language ? "norsk" : "english"}
                    onClick={switchLanguage}
                >
                    {language ? "Bytt til norsk bokmål" : "Change to English"}
                </button>
            </Link>
        </>
    )
}

export default Nav;