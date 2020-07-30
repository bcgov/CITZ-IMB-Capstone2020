/*
 * @Author: your name
 * @Date: 2020-07-07 15:29:49
 * @LastEditTime: 2020-07-29 20:08:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\UseDarkMode.js
 */ 
//add .
import { useEffect, useState } from 'react';

export const UseDarkMode = () => {
    const [theme, setTheme] = useState('Dark');
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };
    //this is the most important function to switch different theme
    //in App.js we put this function in Callback to switch theme.
    const themeToggler = () => {
        theme === 'Dark' ? setMode('Light') : setMode('Dark')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
        setMountedComponent(true)
    }, []);
    
    return [theme, themeToggler, mountedComponent]
};