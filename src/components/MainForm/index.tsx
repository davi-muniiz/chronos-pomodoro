import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import type { TaskModel } from "../../models/TaskModel";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskAction";


export function MainForm() {

    const { state, dispatch } = useTaskContext();

    // const [taskName, setTaskName] = useState(); Usado quando quer capturar em tempo real
    const taskNameInput = useRef<HTMLInputElement>(null); // Usado quando quer validar depois do envio

    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    console.log(nextCycleType);

    // Função que lida com a criação das tasks.
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        // Se não há taskName algum, já retorna.
        if (taskNameInput.current === null) return;

        // Tira os espaços anteriores e posteriores do taskName.
        const taskName = taskNameInput.current.value.trim();
        console.log(taskName);

        // Alerta sobre o erro (ver linha 31).
        if (!taskName) {
            alert("Digite o nome da Task");

            return;
        };

        // Coloca dados no TaskModel.
        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interrupDate: null,
            // Recebe o valor inteiro de nextCycleType.
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };
        console.log(newTask);


        dispatch({type: TaskActionsTypes.START_TASK, payload: newTask});
    }

    function handleInterruptTask() {
        dispatch({type: TaskActionsTypes.INTERRUPT_TASK})
    }

    return (
        <form onSubmit={handleCreateNewTask} action="" className='form'>
                <div className="formRow">
                    <DefaultInput 
                    labelText={
                        state.activeTask?.name === undefined && (
                            "Digite uma Task"
                        )|| state.activeTask?.name !== undefined && (
                            (state.activeTask?.name)
                        )}
                    type='text' 
                    id='meuInput' 
                    placeholder='Ex: Estudar' 
                    // value={taskName}  // tempo real
                    // onChange={e => setTaskName(e.target.value)} // tempo real
                    ref={taskNameInput} // depois do envio
                    disabled={state.activeTask !== null}
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
                    {
                    state.activeTask ?  (
                        <DefaultButton
                            type="button"
                            aria-label="Parar Tarefa" 
                            title="Parar Tarefa" 
                            color="red" 
                            icon={< StopCircleIcon/>}
                            onClick={handleInterruptTask}
                            key="stop"
                        />
                    ) : (
                        <DefaultButton 
                            type="submit" 
                            aria-label="Iniciar Tarefa"
                            title="Iniciar Tarefa" 
                            icon={< PlayCircleIcon/>}
                            key="play"
                        / >
                    )
                        }
                </div>
            </form>
    );
};