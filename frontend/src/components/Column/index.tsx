import { api } from "../../api/api";
import type { IColumn } from "../../interfaces/IColumn";
import TaskCard from "../TaskCard";
import "./styles.css";

const Column = ({ title, number_tasks, tasks }: IColumn) => {

  const deleteTask = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      location.reload();
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  }

  return (
    <div className="column-container">
      <div className="column-content">
        <h2 className="column-title">
          {title} ({number_tasks})
        </h2>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
