
import { ClockFading, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes> (() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme;
    });
    
    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>,
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) 
    {   
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light': 'dark';
            return nextTheme;
        })

    }

useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}, [theme]);

    

    return <div className={style.menu}>
        <div className="btnMenu"><button className={style.b1} type='submit' aria-label='Home Page' title='Página Principal'><HouseIcon /></button></div>
        <div className="btnMenu"><button className={style.b2} type='submit' aria-label='Histórico' title='Histórico'><ClockFading /></button></div>
        <div className="btnMenu"><button className={style.b3} type='submit' aria-label='Configurações' title='Configurações'><SettingsIcon/></button></div>
        <div className="btnMenu"><button className={style.b4} type='submit' aria-label='Tema' title='Tema' onClick={handleThemeChange} href='#'>{nextThemeIcon[theme]}</button></div>
    </div>;
}