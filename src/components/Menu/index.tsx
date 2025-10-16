
import { ClockFading, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './styles.module.css';


export function Menu() {
    return <div className={style.menu}>
        <div className="btnMenu"><button className={style.b1} type='submit'><HouseIcon /></button></div>
        <div className="btnMenu"><button className={style.b2} type='submit'><ClockFading /></button></div>
        <div className="btnMenu"><button className={style.b3} type='submit'><SettingsIcon/></button></div>
        <div className="btnMenu"><button className={style.b4} type='submit'><SunIcon/></button></div>
    </div>;
}