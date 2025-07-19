export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  TESTING = 'testing',
  DONE = 'done',
}
export class Task {
  id: number;
  title: string;
  status: TaskStatus;
}
