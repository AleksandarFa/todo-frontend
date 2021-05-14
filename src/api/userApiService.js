import apiClient from "./baseApiService";
import { setItem } from "../utils/localStorage";

class UserApiService {
  constructor() {
    this.ENDPOINTS = {
      REGISTER: "auth/register/",
      LOGIN: "auth/login/",
      USER: "users/me/",
    };
    this.apiClient = apiClient;
  }

  attachHeaders = (headers) => {
    Object.assign(this.apiClient.defaults.headers, headers);
  };

  setAuthToken = (token) => {
    if (token) {
      setItem("token", token);
      this.attachHeaders({ Authorization: `Bearer ${token}` });
    }
  };

  createUser = async (userData) => {
    try {
      const response = await this.apiClient.post(
        this.ENDPOINTS.REGISTER,
        userData
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  loginUser = async (userData) => {
    try {
      const response = await this.apiClient.post(
        this.ENDPOINTS.LOGIN,
        userData
      );
      this.setAuthToken(response.data.access);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  fetchUserData = async (userData) => {
    try {
      const response = await this.apiClient.get(this.ENDPOINTS.USER);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}

const ApiService = new UserApiService();
export default ApiService;
