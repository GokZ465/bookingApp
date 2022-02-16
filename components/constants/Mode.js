import React, { useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

const Mode = () => {
    let isPageDark = useMediaQuery('(prefers-color-scheme: dark)')
    let isPageLight = useMediaQuery('(prefers-color-scheme: light)')
    const [active, setActive] = useState('true');

    if (isPageDark === true) {
        setDarkMode('dark', 'light');
    }

    if (isPageLight === true) {
        setDarkMode('light', 'dark');
    }

    function switchMode() {
        setActive(!active);
        setDarkMode('dark', 'light');
    };

    function setDarkMode(x, y) {
        if (active === false) {
            document.documentElement.removeAttribute(x, 'true');
            document.documentElement.setAttribute(y, 'true');
        } else {
            document.documentElement.setAttribute(x, 'true');
            document.documentElement.removeAttribute(y, 'true');
        }
    }

    return (
        <>
            <div
                className='mode-wrapper'
                title={active ? 'switch to light mode' : 'switch to dark mode'}
                onClick={switchMode}
            >
                <div className="dark" />
                <div className="light" />
            </div>
        </>
    )
}

export default Mode;