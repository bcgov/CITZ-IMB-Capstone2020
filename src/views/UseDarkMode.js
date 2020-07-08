/*
 * @Author: your name
 * @Date: 2020-07-07 15:29:49
 * @LastEditTime: 2020-07-07 16:21:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\UseDarkMode.js
 */ 
//add .
import { useEffect, useState } from 'react';

export const UseDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
        setMountedComponent(true)
    }, []);
    
    return [theme, themeToggler, mountedComponent]
};