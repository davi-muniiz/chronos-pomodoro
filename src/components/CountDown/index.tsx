import { useTaskContext } from '../../contexts/TaskContext';
import style from './styles.module.css';

export function CountDown() {
    const taskContext = useTaskContext();

    return <div className={style.container}>00:00</div>;
}