import type { ITasks } from "../../interfaces/ITasks";
import "./styles.css";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const TaskCard = ({ title, status }: ITasks) => {
  
  const classNameStatus = {
    pending: "card-pending",
    in_progress:"card-in-progress",
    testing:"card-testing",
    done:"card-done"
  };

  return (
    <div className="task-card">
      <div className="card-info">
        <h3>{title}</h3>
        <p className={`card-status ${classNameStatus[status]}`}>{status}</p>
      </div>
      <div className="card-options">
        <button className="card-button"><FaPencilAlt size={15} color="#2D4F2B" /></button>
        <button className="card-button"><FaTrash size={15} color="#E14434" /></button>
      </div>
    </div>
  )
}

export default TaskCard;