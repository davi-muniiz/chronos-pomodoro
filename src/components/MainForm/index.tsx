import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
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

        // (ver linha 51) Multiplica por 60 para ter o segundos.
        const secondsRemaining = newTask.duration * 60;

        // Garante o uso do estado anterior mais atualizado (fornecido pelo React)
        // Permite atualizar o estado de forma segura, mesmo com várias atualizações seguidas.
        // Exemplo: se o valor atual é 1 e deve somar +1 a cada evento,
        // prevState garante que sempre será usado o valor correto do estado anterior.
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

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        e.preventDefault() // Impede que o form. seja enviado.

        setState(prevState =>  { return {
            ...prevState,
            activeTask: null,
            currentCycle: 0,
            secondsRemaining: 0,
            formatedSecondsRemaining: "00:00",
        };
    
    });
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