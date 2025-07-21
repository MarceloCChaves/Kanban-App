import type { IComment } from "../../interfaces/IComment";
import "./styles.css";
import moment from "moment";

const TaskComments = ({ content, createdAt }: IComment) => {
  return (
    <li className="task-item">
      <small>
        {moment(createdAt).calendar()}
      </small>
      <p>{content}</p>
    </li>
  )
}

export default TaskComments;