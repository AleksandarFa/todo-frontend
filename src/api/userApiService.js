import { getItem } from "../utils/localStorage";
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
      CREATE_TODO: "api/v1/create-todo/",
      SINGLE_TODO: `api/v1/todos/`,
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

    this.setAuthToken(response.data.access);

    return response;
  };

  fetchUserData = async () => {
    this.setAuthToken(getItem("token"));
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
    this.setAuthToken(getItem("token"));
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

  fetchCurrentTodo = async (todoId) => {
    this.setAuthToken(getItem("token"));
    try {
      const response = await this.httpService.request({
        url: this.ENDPOINTS.SINGLE_TODO + todoId + "/",
        method: HTTP_METHODS.GET,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  createTodo = async (todoData) => {
    this.setAuthToken(getItem("token"));
    try {
      const response = await this.httpService.request({
        url: this.ENDPOINTS.CREATE_TODO,
        method: HTTP_METHODS.POST,
        data: todoData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  updateTodo = async (todoId, todoData) => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: this.ENDPOINTS.SINGLE_TODO + todoId + "/",
      method: HTTP_METHODS.PUT,
      data: todoData,
    });
  };

  deleteTodo = async (todoId) => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: this.ENDPOINTS.SINGLE_TODO + todoId + "/",
      method: HTTP_METHODS.DELETE,
    });
  };
}

const ApiService = new UserApiService();
export default ApiService;
