import { useState } from "react";
import type { ITasks } from "../../interfaces/ITasks";
import "./styles.css";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import ModalComponent from "../Modal";

const TaskCard = ({ id, title, status, deleteTask }: ITasks) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const classNameStatus = {
    pending: "card-pending",
    in_progress: "card-in-progress",
    testing: "card-testing",
    done: "card-done",
  };

  const handleDelete = () => {
    deleteTask(id);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="task-card">
        <div className="card-info">
          <h3>{title}</h3>
          <p className={`card-status ${classNameStatus[status]}`}>{status}</p>
        </div>
        <div className="card-options">
          <button className="card-button"><FaPencilAlt size={15} color="#2D4F2B" /></button>
          <button className="card-button" onClick={() => setIsModalOpen(true)}>
            <FaTrash size={15} color="#E14434" />
          </button>
        </div>
      </div>

      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        title="Confirmar exclusão"
      >
        <p>Deseja realmente excluir a tarefa <strong>{title}</strong>?</p>
        <div className="modal-buttons">
          <button onClick={handleDelete} className="btn-confirm">Sim, excluir</button>
          <button onClick={() => setIsModalOpen(false)} className="btn-cancel">Cancelar</button>
        </div>
      </ModalComponent>
    </>
  );
};

export default TaskCard;
