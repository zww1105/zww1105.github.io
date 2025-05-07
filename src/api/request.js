import axios from "axios";

// 创建 axios 实例
const api = axios.create({
  baseURL: "https://api.buttercms.com/v2",
  timeout: 10000, // 增加超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求重试配置
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      auth_token: import.meta.env.VITE_BUTTER_CMS_TOKEN,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    // 如果没有配置重试，或者已经重试过，直接返回错误
    if (!config || !config.retry || config.retryCount >= MAX_RETRIES) {
      return Promise.reject(error);
    }

    // 设置重试计数
    config.retryCount = config.retryCount || 0;
    config.retryCount += 1;

    // 延迟重试
    await new Promise((resolve) =>
      setTimeout(resolve, RETRY_DELAY * config.retryCount)
    );

    // 重新发起请求
    return api(config);
  }
);

// 错误处理工具函数
export const handleApiError = (error) => {
  if (error.response) {
    // 服务器返回错误状态码
    const status = error.response.status;
    const message = error.response.data?.message || "服务器错误";

    switch (status) {
      case 404:
        return "请求的资源不存在";
      case 401:
        return "未授权，请检查认证信息";
      case 403:
        return "没有权限访问该资源";
      case 500:
        return "服务器内部错误";
      default:
        return message;
    }
  } else if (error.request) {
    // 请求发出但没有收到响应
    return "网络错误，请检查网络连接";
  } else {
    // 请求配置出错
    return "请求配置错误";
  }
};

export default api;
