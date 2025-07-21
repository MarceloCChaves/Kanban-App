import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Task from './pages/task';
import CreateTask from './pages/createTask';
import EditTask from './pages/editTask';
import Header from './components/Header';
import Modal from 'react-modal';
import moment from 'moment';

Modal.setAppElement('#root');
moment.locale("pt-br");

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </>
  )
}

export default App
