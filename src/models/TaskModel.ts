import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; // qnd timer chegar o final.
    interrupDate: number | null; // qnd task for interrompida.
    type: keyof TaskStateModel['config'];
};

