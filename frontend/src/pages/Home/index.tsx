import Column from "../../components/Column";
import "./styles.css";

const Home = () => {
  return(
    <section className="home-container">
      <Column title="A Fazer" number_tasks={3} />
      <Column title="Em Progresso" number_tasks={2} />
      <Column title="Testando" number_tasks={3} />
      <Column title="Concluído" number_tasks={5} />
    </section>
  )
}

export default Home;