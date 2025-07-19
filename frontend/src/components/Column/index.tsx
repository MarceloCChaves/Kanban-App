import type { IColumn } from "../../interfaces/IColumn";
import "./styles.css";

const Column = ({ title, number_tasks }: IColumn) => {
  return (
    <div className="column-container">
      <div className="column-content">
        <h2 className="column-title">
          {title} ({number_tasks})
        </h2>
      </div>
    </div>
  );
};

export default Column;
