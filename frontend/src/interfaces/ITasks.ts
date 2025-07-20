export interface ITasks {
  id: number;
  title: string;
  status: 'pending' | 'in_progress' | 'testing' | 'done';
  description?: string;
  deleteTask: (value: number) => void;
}