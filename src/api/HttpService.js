import config from "../config";
import defaultAxios from "axios";

class HttpClient {
  constructor() {
    this.client = defaultAxios.create({
      baseURL: config.api.baseURL,
    });
  }
  request = (requestConfig) => {
    return this.client(requestConfig);
  };

  attachHeaders = (headers) => {
    Object.assign(this.client.defaults.headers.common, headers);
  };
}

class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  request = (requestConfig) => {
    return this.httpClient.request(requestConfig);
  };

  attachHeaders = (headers) => {
    this.httpClient.attachHeaders(headers);
  };
}

const httpService = new HttpService(new HttpClient());
export default httpService;
