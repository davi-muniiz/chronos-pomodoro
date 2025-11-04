// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado.

import type { TaskModel } from "../../models/TaskModel"

// Define os tipos de ações (actions) que podem ser disparadas no taskReducer.
//
// 🔹 O enum TaskActionsTypes lista todos os tipos possíveis de ação:
//    - START_TASK: inicia uma nova tarefa.
//    - INTERRUPT_TASK: interrompe a tarefa atual antes de finalizar.
//    - RESET_STATE: reseta completamente o estado para o valor inicial.
//
// 🔹 O tipo TaskActionsModel descreve o formato (shape) de cada ação possível:
//    - A ação START_TASK carrega um 'payload' com os dados da nova tarefa (TaskModel).
//    - As ações INTERRUPT_TASK e RESET_STATE não precisam de payload, pois
//      apenas sinalizam ao reducer o que deve ser feito.
//
// Essa tipagem garante que o TypeScript valide automaticamente o tipo e
// os dados de cada ação, evitando erros ao despachar (dispatch) ações incorretas.

export enum TaskActionsTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    INIT_COUNTER = 'INIT_COUNTER',
    COMPLETE_TASK = "COMPLETE_TASK",
};

export type TaskActionsModel = 
  | {
    type: TaskActionsTypes.START_TASK, 
    payload: TaskModel,
} | {
    type: TaskActionsTypes.INTERRUPT_TASK,
} | {
    type: TaskActionsTypes.RESET_STATE,
} | {
    type: TaskActionsTypes.INIT_COUNTER,
    payload: {secondsRemaining: number},
} | {
    type: TaskActionsTypes.COMPLETE_TASK,
};