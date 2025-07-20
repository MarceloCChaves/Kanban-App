import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/createTask';
import Header from './components/Header';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </>
  )
}

export default App
