import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/timerWorkerManager";

type TaskContextProviderProps = {
    children: React.ReactNode
};

// TaskContextProvider dá ao app o contexto do que ele deve exibir, onde se é preciso um state.
// Por isso, usa-se state e setState como param. para as childrens.

export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);


    // Pega o Worker
    const worker = TimerWorkerManager.getInstance()

    // Ativa o worker quando msg.
    worker.onmessage(e => {
        const countDownSeconds = e.data;
        console.log(countDownSeconds);


        // Se o contador for 0, significa que a Task foi completada.
        if (countDownSeconds <= 0) {
            console.log("Worker Completed")
            worker.terminate()
        }
    })

    // Usa o state como sinal para parar o timer.
    // Se activeTask !== true -> Significa que -> Task foi interrompida.
    useEffect(() => {
        if (!state.activeTask) {
            console.log("worker terminado por falta de active task");
            worker.terminate()
        }

        worker.postMessage(state);
    } , [worker, state]);

    return <TaskContext.Provider value={{state, dispatch }}>{children}</TaskContext.Provider>
};
     