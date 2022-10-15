import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../api/pm.api';

import Alert from '../components/Alert';
import Loading from '../components/Loading';
import ProjectForm from '../components/ProjectForm';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getProjects();
  }, []); // useCallback para resolver a "reclamação";

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 5000)
  }

  const getProjects = () => {
    api.getProjects()
      .then((result) => {
        setProjects(result)
      })
      .catch((error) => {
        handleError(error)
      })
  }

  const toggleForm = () => {
    setOpenForm(!openForm);
  };

  const handleSubmit = ({ title, description }) => {
    api.createProject({title, description})
      .then(() => {
        getProjects();
        setOpenForm(false);
      })
      .catch((error) => {
        handleError(error);
      })
  }

  return (
    <div>
      {error && <Alert>{error}</Alert>}
      <button onClick={toggleForm}>{openForm ? 'cancel' : 'add project'}</button>
      {openForm && <ProjectForm submitFunc={handleSubmit}/>}
      {projects.length ? projects.map((proj) => {
        return (
          <div key={proj._id}>
            <Link to={`/projects/${proj._id}`}>
              <h3>{proj.title}</h3>
            </Link>
          </div>
        )
      }) : <Loading />}
    </div>
  )
}

export default ProjectList;