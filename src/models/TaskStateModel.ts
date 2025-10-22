import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
    tasks: TaskModel[]; // histórico, MainForm
    secondsRemaining: number; // CountDown, Histórico, Button, MainForm, Home
    formatedSecondsRemaining: string; // Título, CountDown
    activeTask: TaskModel | null; // CountDown, Histórico, Button, MainForm
    currentCycle: number; // 1 a 8; // Home
    config: { // MainForm
        workTime: number; 
        shortRest: number;
        longRest: number;
    };
};