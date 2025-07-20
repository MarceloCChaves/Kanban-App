import type { ITasks } from "../../interfaces/ITasks";
import "./styles.css";

const TaskCard = ({ title, status }: ITasks) => {
  return (
    <div className="task-card">
      {title} - {status}
    </div>
  )
}

export default TaskCard;