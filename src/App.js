import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AnonymousRoute from './components/AnonymousRoute';

import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import ProjectListPage from './pages/ProjectList';
import ProjectDetailsPage from './pages/ProjectDetails';
import EditProjectPage from './pages/EditProject';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import EditProfilePage from './pages/EditProfile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<PrivateRoute><ProjectListPage /></PrivateRoute>} />
        <Route path='/projects/:projectId' element={<PrivateRoute><ProjectDetailsPage /></PrivateRoute>} />
        <Route path='/projects/:projectId/edit' element={<PrivateRoute><EditProjectPage /></PrivateRoute>} />
        <Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path='/profile/edit' element={<PrivateRoute><EditProfilePage /></PrivateRoute>} />
        <Route path='/signup' element={<AnonymousRoute><SignupPage /></AnonymousRoute>} />
        <Route path='/login' element={<AnonymousRoute><LoginPage /></AnonymousRoute>} />
      </Routes>
    </div>
  );
}

export default App;
