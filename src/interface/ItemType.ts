import { TaskType } from "./TaskType"

export interface ItemType {
    id: number
    tasks: TaskType[]
    position: {
        x: number;
        y: number;
    }
    isChange: boolean
}