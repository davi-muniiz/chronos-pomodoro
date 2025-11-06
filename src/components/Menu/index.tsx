
import { ClockFading, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

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
        <div className="btnMenu"><Link className={style.b1} aria-label='Home Page' title='Página Principal' to="/" ><HouseIcon /></Link></div>
        <div className="btnMenu"><Link className={style.b2} aria-label='Histórico' title='Histórico' to='/historico'><ClockFading /></Link></div>
        <div className="btnMenu"><Link className={style.b3} aria-label='Configurações' title='Configurações' to='/config'><SettingsIcon/></Link></div>
        <div className="btnMenu"><Link className={style.b4} aria-label='Tema' title='Tema' onClick={handleThemeChange} to='#'>{nextThemeIcon[theme]}</Link></div>
    </div>;
}