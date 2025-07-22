import { useNavigate } from "react-router-dom";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState, type FormEvent } from "react";
import { api } from "../../api/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import AnchorButton from "../../components/AnchorButton";

const CreateTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        status,
        description
      });
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  }

  return (
    <form className="form-container" onSubmit={submitForm}>
      <div className="form-content">
        <header className="form-header">
          <h3 className="form-title">Cadastrar nova tarefa</h3>
          <AnchorButton classname="form-back" to="/">
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
              placeholder="Digite o título da tarefa"
              onchange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <Button
              classname="form-create"
              type="submit"
              text="Criar tarefa"
            />
            <Button
              classname="form-cancel"
              type="button"
              text="Cancelar"
              onclick={() => navigate("/")}
            />
          </div>
        </main>
      </div>
    </form>
  )
}

export default CreateTask;