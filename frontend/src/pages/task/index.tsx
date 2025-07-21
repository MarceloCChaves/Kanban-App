import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState, type FormEvent } from "react";
import type { ITask } from "../../interfaces/ITask";
import { api } from "../../api/api";
import ModalComponent from "../../components/Modal";
import TaskComments from "../../components/Comments";

const Task = () => {
  const [task, setTask] = useState<ITask | null>(null);
  const params = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");

  const deleteTask = async (id: string | undefined) => {
    try {
      await api.delete(`/tasks/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  }

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await api.get(`/tasks/${params.id}`);
        setTask(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTask();
  }, [params.id]);

  const submitForm = async (e: FormEvent) => {
      e.preventDefault();
  
      try {
        await api.post("/comments", {
          content,
          taskId: Number(params.id)
        });
        location.reload();
      } catch (error) {
        console.error("Erro ao criar comentário:", error);
      }
    }

  return (
    <div className="task-container">
      <div className="task-content">
        <header className="task-header">
          <h3 className="task-title">{task?.title}</h3>
          <Link className="task-back" to="/">Voltar <FaArrowCircleLeft /></Link>
        </header>
        <main className="task-main">
          <p>Status: {task?.status}</p>
          {task?.description ?
            <div className="task-description">
              <p>{task?.description}</p>
            </div> : <></>}
          <form className="task-publish" onSubmit={submitForm}>
            <label htmlFor="input-comment">Publicar comentário</label>
            <textarea className="task-publish-input" required rows={5} placeholder="Publicar comentário" id="input-comment" onChange={(e) => setContent(e.target.value)} />
            <button className="task-publish-button">Publicar</button>
          </form>
          <h3>Comentários ({task?.comments.length})</h3>
          <ul>
            {task?.comments.map(comment => (
              <TaskComments
                key={comment.id}
                id={comment.id}
                taskId={comment.taskId}
                content={comment.content}
                createdAt={comment.createdAt}
              />
            ))}
          </ul>

          <div className="task-options">
            <Link className="btn-confirm" to={`/edit-task/${params.id}`}>Editar tarefa</Link>
            <button className="btn-cancel" onClick={() => setIsModalOpen(!isModalOpen)}>Deletar tarefa</button>
          </div>
        </main>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        title="Confirmar exclusão"
      >
        <p>Deseja realmente excluir a tarefa <strong>{task?.title}</strong>?</p>
        <div className="modal-buttons">
          <button onClick={() => deleteTask(params.id)} className="btn-confirm">Sim, excluir</button>
          <button onClick={() => setIsModalOpen(false)} className="btn-cancel">Cancelar</button>
        </div>
      </ModalComponent>
    </div>
  )
}

export default Task;