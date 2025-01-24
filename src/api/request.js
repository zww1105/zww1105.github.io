import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // 示例 API 地址
  timeout: 5000,
});

export default api;
