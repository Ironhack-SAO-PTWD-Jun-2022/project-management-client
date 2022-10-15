import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URI || 'http://localhost:5005';

class ProjectManagerApi {
  constructor (baseURL) {
    this.api = axios.create({ baseURL });
  }

  getProjects = async () => {
    try {
      const { data } = await this.api.get('/projects');
      return data;
    } catch (error) {
      throw error.message || error;
    }
  }

  getOneProject = async (projectId) => {
    try {
      const { data } = await this.api.get(`/projects/${projectId}`);
      return data;
    } catch (error) {
      throw error.message || error;
    }
  }

  createProject = async ({title, description}) => {
    try {
      await this.api.post('/projects', {title, description})
    } catch (error) {
      throw error.message || error;
    }
  }
}

const projectManagementApi = new ProjectManagerApi(baseURL);
export default projectManagementApi;
