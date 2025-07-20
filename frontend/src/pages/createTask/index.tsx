import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState, type FormEvent } from "react";
import { api } from "../../api/api";

const CreateTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        status,
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
          <Link className="form-back" to="/">Voltar <FaArrowCircleLeft /></Link>
        </header>
        <main className="form-main">
          <div className="form-task">
            <label className="">Título<span className="form-required">*</span></label>
            <input className="form-input" type="text" placeholder="Digite o título da tarefa" required onChange={(e) => setTitle(e.target.value)} />
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
          <div className="form-actions">
            <button className="form-create" type="submit">Criar tarefa</button>
            <button className="form-cancel" type="button" onClick={() => navigate("/")} >Cancelar</button>
          </div>
        </main>
      </div>
    </form>
  )
}

export default CreateTask;