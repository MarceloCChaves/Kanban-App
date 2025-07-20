import type { IColumn } from "../../interfaces/IColumn";
import TaskCard from "../TaskCard";
import "./styles.css";

const Column = ({ title, number_tasks, tasks }: IColumn) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
