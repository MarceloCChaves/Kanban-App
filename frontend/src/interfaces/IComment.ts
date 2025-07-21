export interface IComment {
  id: number;
  content: string;
  createdAt: Date;
  taskId: number;
  deleteComment: (value: number) => void;
}