import type { IComment } from "./IComment";

export interface ITask {
  id: number;
  title: string;
  status: string;
  description?: string;
  comments: IComment[]; 
}