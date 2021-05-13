import apiClient from "./baseApiService";

class UserApiService {
  ENDPOINTS = {
    REGISTER: "auth/register/",
    LOGIN: "auth/login/",
  };

  static async createUser(userData) {
    try {
      const response = await apiClient.post(this.ENDPOINTS.REGISTER, userData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserApiService;
