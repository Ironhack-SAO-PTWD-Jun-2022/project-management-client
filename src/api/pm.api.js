import axios from 'axios';
import { storeToken, getToken } from '../utils/token.utils';

const baseURL = process.env.REACT_APP_API_URI || 'http://localhost:5005';

const handleError = (error) => {
  throw error.response.data || error.message || error;
}

class ProjectManagerApi {
  constructor (baseURL) {
    this.api = axios.create({ baseURL });
    this.api.interceptors.request.use((config) => {
      const storedToken = getToken();

      if(storedToken) {
        config.headers = {
          Authorization: `Bearer ${storedToken}`,
        }
      }

      return config;
    })
  }

  getProjects = async () => {
    try {
      const { data } = await this.api.get('/projects');
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  getOneProject = async (projectId) => {
    try {
      const { data } = await this.api.get(`/projects/${projectId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  createProject = async ({title, description}) => {
    try {
      await this.api.post('/projects', {title, description})
    } catch (error) {
      handleError(error);
    }
  }

  editProject = async (projectId, values) => {
    try {
      await this.api.put(`/projects/${projectId}`, values);
    } catch (error) {
      handleError(error);
    }
  }

  removeProject = async (projectId) => {
    try {
      await this.api.delete(`/projects/${projectId}`);
    } catch (error) {
      handleError(error);
    }
  }

  createTask = async ({title, description, projectId}) => {
    try {
      await this.api.post('/tasks', {title, description, projectId});
    } catch (error) {
      handleError(error);
    }
  }

  signup = async ({ username, email, password }) => {
    try {
      const { data } = await this.api.post('/auth/signup', {username, email, password});
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  login = async ({ email, password }) => {
    try {
      const { data } = await this.api.post('/auth/login', {email, password});
      storeToken(data.token);
    } catch (error) {
      handleError(error);
    }
  }

  verify = async () => {
    try {
      const { data } = await this.api.get('/auth/verify');
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  getProfile = async () => {
    try {
      const { data } = await this.api.get('/users/profile');
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  updateProfile = async (formValues) => {
    try {
      const { data } = await this.api.post('/users/upload', formValues);
      return data;
    } catch (error) {
      handleError(error);
    }
  }
}

const projectManagementApi = new ProjectManagerApi(baseURL);
export default projectManagementApi;
