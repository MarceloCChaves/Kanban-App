import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/createTask';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </>
  )
}

export default App
