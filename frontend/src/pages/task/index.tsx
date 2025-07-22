import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState, type FormEvent } from "react";
import type { ITask } from "../../interfaces/ITask";
import { api } from "../../api/api";
import ModalComponent from "../../components/Modal";
import TaskComments from "../../components/Comments";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import AnchorButton from "../../components/AnchorButton";

const Task = () => {
  const [task, setTask] = useState<ITask | null>(null);
  const params = useParams();
  const navigate = useNavigate();
  const [isModaldeleteTaskOpen, setIsModaldeleteTaskOpen] = useState(false);
  const [isModaldeleteCommentOpen, setIsModaldeleteCommentOpen] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState<number | null>(null);
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

  const deleteComment = async (id: number) => {
    try {
      await api.delete(`/comments/${id}`);
      location.reload();
    } catch (error) {
      console.error("Erro ao deletar comentário:", error);
    }
  }

  return (
    <div className="task-container">
      <div className="task-content">
        <header className="task-header">
          <h3 className="task-title">{task?.title}</h3>
          <AnchorButton
            to="/"
            classname="task-back"
          >
            Voltar <FaArrowCircleLeft />
          </AnchorButton>
        </header>
        <main className="task-main">
          <p>Status: {task?.status}</p>
          {task?.description ?
            <div className="task-description">
              <p>{task?.description}</p>
            </div> : <></>}
          <form className="task-publish" onSubmit={submitForm}>
            <label htmlFor="input-comment">Publicar comentário</label>
            <Textarea
              classname="task-publish-input"
              rows={5}
              required
              id="input-comment"
              placeholder="Publicar comentário"
              onchange={(e) => setContent(e.target.value)}
            />
            <Button
              classname="task-publish-button"
              text="Publicar"
              type="submit"
            />
          </form>
          <h3>Comentários ({task?.comments.length})</h3>
          <ul>
            {task?.comments.map(comment => (
              <div key={comment.id}>
                <TaskComments
                  id={comment.id}
                  taskId={comment.taskId}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  deleteComment={() => {
                    setCommentIdToDelete(comment.id);
                    setIsModaldeleteCommentOpen(true);
                  }}
                />
              </div>
            ))}
          </ul>

          <div className="task-options">
            <AnchorButton
              classname="btn-confirm"
              to={`/edit-task/${params.id}`}
            >
              Editar tarefa
            </AnchorButton>
            <Button
              classname="btn-cancel"
              type="button"
              text="Deletar tarefa"
              onclick={() => setIsModaldeleteTaskOpen(!isModaldeleteTaskOpen)}
            />
          </div>
        </main>
      </div>
      <ModalComponent
        isOpen={isModaldeleteTaskOpen}
        onRequestClose={() => setIsModaldeleteTaskOpen(false)}
        title="Confirmar exclusão"
      >
        <p>Deseja realmente excluir a tarefa <strong>{task?.title}</strong>?</p>
        <div className="modal-buttons">
          <Button
            classname="btn-confirm"
            type="button"
            text="Sim, excluir"
            onclick={() => deleteTask(params.id)}
          />
          <Button
            classname="btn-cancel"
            type="button"
            text="Cancelar"
            onclick={() => setIsModaldeleteTaskOpen(false)}
          />
        </div>
      </ModalComponent>
      <ModalComponent
        isOpen={isModaldeleteCommentOpen}
        onRequestClose={() => {
          setIsModaldeleteCommentOpen(false);
          setCommentIdToDelete(null);
        }}
        title="Confirmar exclusão"
      >
        <p>Deseja realmente excluir o comentário?</p>
        <div className="modal-buttons">
          <Button
            onclick={() => {
              if (commentIdToDelete !== null) {
                deleteComment(commentIdToDelete);
                setIsModaldeleteCommentOpen(false);
                setCommentIdToDelete(null);
              }
            }}
            classname="btn-confirm"
            text="Sim, excluir"
            type="button"
          />
          <Button
            onclick={() => {
              setIsModaldeleteCommentOpen(false);
              setCommentIdToDelete(null);
            }}
            classname="btn-cancel"
            text="Cancelar"
            type="button"
          />
        </div>
      </ModalComponent>
    </div>
  )
}

export default Task;