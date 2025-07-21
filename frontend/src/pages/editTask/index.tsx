import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState, type FormEvent } from "react";
import { api } from "../../api/api";
import ModalComponent from "../../components/Modal";

const EditTask = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const params = useParams();

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await api.get(`/tasks/${params.id}`);
        setTitle(res.data.title);
        setStatus(res.data.status);
        setDescription(res.data.description);
      } catch (error) {
        console.error(error);
      }
    };
    getTask();
  }, [params.id]);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.patch(`/tasks/${params.id}`, {
        title,
        status,
        description,
      });
      navigate(`/task/${params.id}`);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  }

  return (
    <form className="form-container" onSubmit={submitForm}>
      <div className="form-content">
        <header className="form-header">
          <h3 className="form-title">Editar tarefa</h3>
          <Link className="form-back" to="/">Voltar <FaArrowCircleLeft /></Link>
        </header>
        <main className="form-main">
          <div className="form-task">
            <label className="">Título<span className="form-required">*</span></label>
            <input className="form-input" type="text" placeholder="Digite o título da tarefa" value={title} required onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-task">
            <label className="">Status<span className="form-required">*</span></label>
            <select className="form-select" value={status} required onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">A Fazer</option>
              <option value="in_progress">Em Progresso</option>
              <option value="testing">Testando</option>
              <option value="done">Concluído</option>
            </select>
          </div>
          <div className="form-task">
            <label>Descrição</label>
            <textarea className="form-input" rows={7} placeholder="Digite o título da tarefa" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-actions">
            <button className="form-create" type="button" onClick={() => setIsModalOpen(!isModalOpen)}>Editar tarefa</button>
            <button className="form-cancel" type="button" onClick={() => navigate("/")} >Cancelar</button>
          </div>
        </main>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        title="Confirmar Edição"
      >
        <p>Deseja realmente editar a tarefa <strong>{title}</strong>?</p>
        <div className="modal-buttons">
          <button onClick={submitForm} className="btn-confirm">Sim, editar</button>
          <button onClick={() => setIsModalOpen(!isModalOpen)} className="btn-cancel">Cancelar</button>
        </div>
      </ModalComponent>
    </form>
  )
}

export default EditTask;