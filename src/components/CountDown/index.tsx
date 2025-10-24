import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import style from './styles.module.css';

export function CountDown() {
    const {state} = useTaskContext();

    return <div className={style.container}>{state.formatedSecondsRemaining}</div>;
}