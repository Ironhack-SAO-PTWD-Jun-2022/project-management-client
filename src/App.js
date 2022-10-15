import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import ProjectListPage from './pages/ProjectList';
import ProjectDetailsPage from './pages/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectListPage />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
