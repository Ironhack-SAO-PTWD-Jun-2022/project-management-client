import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import api from '../api/pm.api';

import Loading from '../components/Loading';
import Alert from '../components/Alert';

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getOneProject(projectId)
      .then((result) => {
        setProject(result);
      })
      .catch((error) => handleError(error));
  }, [projectId]);

  const handleRemove = () => {
    api.removeProject(projectId)
      .then(() => {
        navigate('/projects');
      })
      .catch(error => handleError(error))
  }

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 5000)
  }

  return (
    <div>
      {error && <Alert>{error}</Alert>}
      {!project ? <Loading /> : (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <button onClick={handleRemove}>delete this project</button>
          <ul>
            {project.tasks.map((task) => {
              return (
                <li key={task._id}>
                  <h3>{task.title}</h3>
                  <h4>Description:</h4>
                  <p>{task.description}</p>
                </li>
              )
            })}
          </ul>

          <Link to={`/projects/${projectId}/edit`}>
            <button>Edit this project</button>
          </Link>
          <Link to='/projects'>
            <button>Back to projects</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default ProjectDetails