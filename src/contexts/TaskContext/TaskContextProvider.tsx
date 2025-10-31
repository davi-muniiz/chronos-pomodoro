import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
    children: React.ReactNode
};

// TaskContextProvider dá ao app o contexto do que ele deve exibir, onde se é preciso um state.
// Por isso, usa-se state e setState como param. para as childrens.

export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

   

    return <TaskContext.Provider value={{state, dispatch }}>{children}</TaskContext.Provider>
};
     