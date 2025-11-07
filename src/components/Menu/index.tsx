import { ClockFading, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

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
        <div className="btnMenu"><RouterLink className={style.b1} aria-label='Home Page' title='Página Principal' href="/" ><HouseIcon /></RouterLink></div>
        <div className="btnMenu"><RouterLink className={style.b2} aria-label='Histórico' title='Histórico' href='/historico'><ClockFading /></RouterLink></div>
        <div className="btnMenu"><RouterLink className={style.b3} aria-label='Configurações' title='Configurações' href='/config'><SettingsIcon/></RouterLink></div>
        <div className="btnMenu"><RouterLink className={style.b4} aria-label='Tema' title='Tema' onClick={handleThemeChange} href='#'>{nextThemeIcon[theme]}</RouterLink></div>
    </div>;
}