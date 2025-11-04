import type { TaskStateModel } from "../../models/TaskStateModel";

// initialTaskState define a 'configuração padrão do app, baseado no TaskStateModel, que são as 'configurações' possíveis.
// Nem tudo é alterável, como por exemplo os ciclos. Mas a duração de cada, sim.

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formatedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: { 
        workTime: 1,
        shortRest: 1,
        longRest: 1,
    },
};