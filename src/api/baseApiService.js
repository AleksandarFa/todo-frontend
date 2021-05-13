import defaultAxios from "axios";
import config from "../config";

const apiClient = defaultAxios.create({
  baseURL: config.api.baseUrl,
});

export default apiClient;
