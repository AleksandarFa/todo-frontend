import apiClient from "./baseApiService";

class UserApiService {
  constructor() {
    this.ENDPOINTS = {
      REGISTER: "auth/register/",
      LOGIN: "auth/login/",
    };
    this.apiClient = apiClient;
  }

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
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}

const ApiService = new UserApiService();
export default ApiService;
