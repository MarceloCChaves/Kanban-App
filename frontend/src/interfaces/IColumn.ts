import type { ITasks } from "./ITasks";

export interface IColumn {
  title: string;
  number_tasks: number;
  tasks: ITasks[];
}