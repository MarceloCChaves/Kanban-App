import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState, type FormEvent } from "react";
import { api } from "../../api/api";
import ModalComponent from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import AnchorButton from "../../components/AnchorButton";

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
          <AnchorButton classname="form-back" to={`/task/${params.id}`}>
            Voltar
            <FaArrowCircleLeft />
          </AnchorButton>
        </header>
        <main className="form-main">
          <div className="form-task">
            <label className="">Título<span className="form-required">*</span></label>
            <Input
              classname="form-input"
              type="text"
              value={title}
              required
              placeholder="Digite o título da tarefa"
              onchange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-task">
            <label className="">Status<span className="form-required">*</span></label>
            <Select
              classname="form-select"
              value={status}
              required
              onchange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">A Fazer</option>
              <option value="in_progress">Em Progresso</option>
              <option value="testing">Testando</option>
              <option value="done">Concluído</option>
            </Select>
          </div>
          <div className="form-task">
            <label>Descrição</label>
            <Textarea
              classname="form-input"
              rows={7}
              value={description}
              placeholder="Digite o título da tarefa"
              onchange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <Button
              classname="form-create"
              type="button"
              text="Editar tarefa"
              onclick={() => setIsModalOpen(!isModalOpen)}
            />
            <Button
              classname="form-cancel"
              type="button"
              text="Cancelar"
              onclick={() => navigate(`/task/${params.id}`)}
            />
          </div>
        </main>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        title="Confirmar Edição"
      >
        <p>Deseja realmente editar a tarefa <strong>{params.id}</strong>?</p>
        <div className="modal-buttons">
          <Button
            classname="btn-confirm"
            type="submit"
            text="Sim, editar"
            onclick={submitForm}
          />
          <Button
            classname="btn-cancel"
            type="button"
            text="Cancelar"
            onclick={() => setIsModalOpen(!isModalOpen)}
          />
        </div>
      </ModalComponent>
    </form>
  )
}

export default EditTask;