import { useContext } from "react";
import { TaskContext } from "./TaskContext";


// Função que somente usa o contexto.
export function useTaskContext() {
    return useContext(TaskContext);
};