import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../api/pm.api';

import ProjectForm from '../components/ProjectForm';

const EditProject = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProject()
  }, []);

  const getOneProject = () => {
    api.getOneProject(projectId)
      .then((result) => setProject(result))
      .catch((error) => handleError(error))
  }

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 5000)
  }

  const handleSubmit = (values) => {
    api.editProject(projectId, values)
      .then(() => {
        navigate(`/projects/${projectId}`);
      })
      .catch((error) => handleError(error))
  }

  return (
    <div>
      {project && (
        <ProjectForm initialValues={{...project}} submitFunc={handleSubmit} />
      )}
    </div>
  )
}

export default EditProject