import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; // qnd timer chegar o final ou qnd interromper;
    interrupDate: number | null; // qnd task for interrompida.
    type: keyof TaskStateModel['config'];
};

