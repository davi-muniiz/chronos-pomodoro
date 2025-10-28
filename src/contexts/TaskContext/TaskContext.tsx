import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";


// O type é super importante para o React distinguir o que fazer...
// Sempre deve-se tipar as coisas que deverão ser monitoradas pelo React.
type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// Cria a variável de contexto inicial.
const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
};

// Concatena-se em uma variável global, transformando-a em um contexto.
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
