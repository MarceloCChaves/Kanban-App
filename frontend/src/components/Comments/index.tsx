import type { IComment } from "../../interfaces/IComment";
import "./styles.css";
import moment from "moment";
import { FaTrash } from "react-icons/fa";

const TaskComments = ({ id, content, createdAt, deleteComment }: IComment) => {
  return (
    <li className="task-item">
      <div className="task-actions">
        <small>
          {moment(createdAt).calendar()}
        </small>
        <div className="task-icons">
          <FaTrash className="task-icon" size={15} color="#E14434" onClick={() => deleteComment(id)}/>
        </div>
      </div>
      <p>{content}</p>
    </li>
  )
}

export default TaskComments;