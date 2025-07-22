import { useState } from "react";
import { api } from "../../api/api";
import type { IColumn } from "../../interfaces/IColumn";
import TaskCard from "../TaskCard";
import "./styles.css";
import Input from "../Input";

const Column = ({ title, number_tasks, tasks }: IColumn) => {

  const [findTask, setFindTask] = useState("");

  const deleteTask = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      location.reload();
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  }

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(findTask.toLowerCase())
  );

  return (
    <div className="column-container">
      <div className="column-content">
        <h2 className="column-title">
          {title} ({number_tasks})
        </h2>
        {tasks.length ?
          <Input
            classname="column-search"
            type="text"
            placeholder="Procurar tarefa..."
            value={findTask}
            onchange={(e) => setFindTask(e.target.value)}
          /> :
          <></>
        }
        {filteredTasks.map((task) => (
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