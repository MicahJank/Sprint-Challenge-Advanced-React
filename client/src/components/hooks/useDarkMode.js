import { useState, useEffect } from 'react';


export const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useState(initialValue);

    useEffect(() => {
        darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');
    }, [darkMode])

    return [darkMode, setDarkMode];
}