import defaultAxios from "axios";

const apiClient = defaultAxios.create({
  baseURL: "http://localhost:8000/",
});

export default apiClient;
