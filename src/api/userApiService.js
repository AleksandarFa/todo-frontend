import apiClient from "./baseApiService";
import httpService from "./HttpService";
import { setItem } from "../utils/localStorage";
import { HTTP_METHODS } from "../constants";

class UserApiService {
  constructor() {
    this.ENDPOINTS = {
      REGISTER: "auth/register/",
      LOGIN: "auth/login/",
      USER: "users/me/",
      ALL_TODOS: "api/v1/todos/",
    };
    this.httpService = httpService;
  }

  setAuthToken = (token) => {
    if (token) {
      setItem("token", token);
      this.httpService.attachHeaders({ Authorization: `Bearer ${token}` });
    }
  };

  createUser = async (userData) => {
    try {
      const response = await this.httpService.request({
        url: this.ENDPOINTS.REGISTER,
        method: HTTP_METHODS.POST,
        userData,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  loginUser = async (userData) => {
    const response = await this.httpService.request({
      url: this.ENDPOINTS.LOGIN,
      method: HTTP_METHODS.POST,
      data: userData,
    });

    return response;
  };

  fetchUserData = async () => {
    try {
      const response = await this.httpService.request({
        url: this.ENDPOINTS.USER,
        method: HTTP_METHODS.GET,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  fetchAllUserTodos = async () => {
    try {
      const response = await this.httpService.request({
        url: this.ENDPOINTS.ALL_TODOS,
        method: HTTP_METHODS.GET,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}

const ApiService = new UserApiService();
export default ApiService;
