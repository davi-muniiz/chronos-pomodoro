import { ChartNoAxesColumn, PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { useRef, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import type { TaskModel } from "../../models/TaskModel";
import { formatSecToMin } from "../../utils/formatSecToMin";


export function MainForm() {

    const { state, setState } = useTaskContext();

    // const [taskName, setTaskName] = useState(); Usado quando quer capturar em tempo real
    const taskNameInput = useRef<HTMLInputElement>(null); // Usado quando quer validar depois do envio

    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    console.log(nextCycleType);


    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();
        console.log(taskName);

        if (!taskName) {
            alert("Digite o nome da Task");

            return;
        };

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interrupDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };
        console.log(newTask);

        const secondsRemaining = newTask.duration * 60;

        setState(prevState =>  { return {
            ...prevState,
            config: {...prevState.config},
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining,
            formatedSecondsRemaining: formatSecToMin(secondsRemaining),
            tasks: [...prevState.tasks, newTask],
        };
    });
    }

    return (
        <form onSubmit={handleCreateNewTask} action="" className='form'>
                <div className="formRow">
                    <DefaultInput 
                    labelText="Text" 
                    type='text' 
                    id='meuInput' 
                    placeholder='Ex: Estudar' 
                    // value={taskName}  // tempo real
                    // onChange={e => setTaskName(e.target.value)} // tempo real
                    ref={taskNameInput} // depois do envio
                    /> 
                    
                </div>
                <div className="formRow">
                    <p>Nesse ciclo foque por 25 min.</p>
                </div>

                {state.currentCycle > 0 && (
                
                    <div className="formRow">
                        <Cycles></Cycles>
                    </div>

                )}
                
                <div className="formRow">
                    <DefaultButton icon={< PlayCircleIcon/>}/ >
                </div>
            </form>
    );
};