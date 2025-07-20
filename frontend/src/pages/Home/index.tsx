import Column from "../../components/Column";
import { api } from "../../api/api";
import "./styles.css";
import { useEffect, useState } from "react";
import type { ITasks } from "../../interfaces/ITasks";

const Home = () => {

  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    api.get("/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const tasksByStatus = {
    pending: tasks.filter((t) => t.status === "pending"),
    in_progress: tasks.filter((t) => t.status === "in_progress"),
    testing: tasks.filter((t) => t.status === "testing"),
    done: tasks.filter((t) => t.status === "done"),
  };


  return (
    <section className="home-container">
      <Column title="A Fazer" number_tasks={tasksByStatus.pending.length} tasks={tasksByStatus.pending} />
      <Column title="Em Progresso" number_tasks={tasksByStatus.in_progress.length} tasks={tasksByStatus.in_progress} />
      <Column title="Testando" number_tasks={tasksByStatus.testing.length} tasks={tasksByStatus.testing} />
      <Column title="Concluído" number_tasks={tasksByStatus.done.length} tasks={tasksByStatus.done} />
    </section>
  )
}

export default Home;