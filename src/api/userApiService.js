import apiClient from "./baseApiService";

class UserApiService {
  static async createUser(userData) {
    try {
      const response = await apiClient.post("auth/register/", userData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserApiService;
