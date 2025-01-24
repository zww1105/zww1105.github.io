import axios from "axios";

const api = axios.create({
  baseURL: "https://api.buttercms.com/v2", // Butter CMS API 地址
  timeout: 5000,
});

// 在请求拦截器中添加 auth_token
api.interceptors.request.use(
  (config) => {
    const token = "405eedf3fdebe228e9c48e524ecdf670b9b4f59a";
    if (token) {
      config.params = config.params || {};
      config.params.auth_token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
