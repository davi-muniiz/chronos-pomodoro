import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecToMin } from "../../utils/formatSecToMin";
import { getNextCycle } from "../../utils/getNextCycle";
import { initialTaskState } from "./initialTaskState";
import { TaskActionsTypes, type TaskActionsModel } from "./taskAction";

export function taskReducer(state: TaskStateModel, action: TaskActionsModel) :TaskStateModel {

    switch(action.type) {
        case TaskActionsTypes.START_TASK: {
            
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formatedSecondsRemaining: formatSecToMin(secondsRemaining),
                tasks: [...state.tasks, newTask],
            };
        }
        case TaskActionsTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: "00:00",
                tasks: state.tasks.map(task => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return {...task, interrupDate: Date.now() };
                    }
                    return task;
                })
            };
        }
        case TaskActionsTypes.RESET_STATE: {
            return {...initialTaskState};
        }

        case TaskActionsTypes.INIT_COUNTER: {
            return {
                ...state,
                secondsRemaining: action.payload.secondsRemaining,
                formatedSecondsRemaining: formatSecToMin(action.payload.secondsRemaining),
            }
        }

        case TaskActionsTypes.COMPLETE_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: "00:00",
                tasks: state.tasks.map(task => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return {...task, completeDate: Date.now() };
                    }
                    return task;
                })
            };
        }

        case TaskActionsTypes.SET_CONFIG: {
            return {
                ...state,
                config: action.payload.config,
            };
        }
    }



    // sempre deve retornar o estado.
    return state;
}
 
// 🔹 O que acontece aqui:
// 1. Pega os dados da nova tarefa enviados na action (action.payload).
// 2. Calcula o próximo ciclo com base no ciclo atual (getNextCycle).
// 3. Converte a duração da tarefa em segundos (duration * 60).
// 4. Retorna um novo estado imutável contendo:
//    - A nova tarefa como 'activeTask' (tarefa atual em andamento).
//    - O ciclo atualizado ('currentCycle').
//    - O tempo restante em segundos ('secondsRemaining') e em formato mm:ss ('formatedSecondsRemaining').
//    - A lista de tarefas atualizada, adicionando a nova ao final.