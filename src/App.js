import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import ProjectListPage from './pages/ProjectList';
import ProjectDetailsPage from './pages/ProjectDetails';
import EditProjectPage from './pages/EditProject';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectListPage />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />} />
        <Route path='/projects/:projectId/edit' element={<EditProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
