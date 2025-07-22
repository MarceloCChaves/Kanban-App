import type { ITasks } from "../../interfaces/ITasks";
import AnchorButton from "../AnchorButton";
import "./styles.css";

const TaskCard = ({ id, title, status }: ITasks) => {

  const classNameStatus = {
    pending: "card-pending",
    in_progress: "card-in-progress",
    testing: "card-testing",
    done: "card-done",
  };

  return (
    <>
      <AnchorButton
        classname="task-card" 
        to={`/task/${id}`}
      >
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className={`card-status ${classNameStatus[status]}`}>{status}</p>
        </div>
      </AnchorButton>
    </>
  );
};

export default TaskCard;
