export interface ITasks {
  id: number;
  title: string;
  status: 'pending' | 'in_progress' | 'testing' | 'done';
  deleteTask: (value: number) => void;
}