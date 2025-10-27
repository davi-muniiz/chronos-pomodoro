import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css'

export function Cycles() {

    const {state} = useTaskContext();

    const cycleSteps = Array.from({length: state.currentCycle});

    const cycleDescMap = {
        workTime: 'foco',
        shortRest: 'descanso curto',
        longRest: 'descanso longo',
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleSteps.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle);
                    return <span key={`${nextCycleType}_${nextCycle}`} className={`${styles.cycleDot} ${styles[nextCycleType]}`} aria-label={`${cycleDescMap[nextCycleType]}`} title={`${cycleDescMap[nextCycleType]}`}></span>;
                })}
            </div>
        </div>
        
    )
}