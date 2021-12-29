import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }

    useEffect(() => {
        const local = window.localStorage.getItem('theme');
        local && setTheme(local);
        setMountedComponent(true);
    }, []);
    return [theme, themeToggler, mountedComponent]
}