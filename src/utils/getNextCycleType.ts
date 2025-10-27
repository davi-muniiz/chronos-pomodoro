import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel["type"] {
    if (currentCycle % 8 === 0) return "longRest";
    if (currentCycle % 2 === 0) return "shortRest";
    return "workTime";
}