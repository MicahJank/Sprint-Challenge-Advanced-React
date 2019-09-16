import { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(initialValue);

    useEffect(() => {
        darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');
    }, [darkMode])

    return [darkMode, setDarkMode];
}