import router from '@/router';
import '@icon-park/react/styles/index.css';
import { ConfigProvider, message } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { HoxRoot } from 'hox';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.less';

dayjs.locale('zh-cn');
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
  config.headers.token = userInfo.token;
  return config;
});
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    if (response?.data instanceof Blob) {
      return response.data;
    }
    const { success, message: messageText } = response?.data || {};
    if (success) {
      // 增删改即使请求成功也应该返回消息告知用户
      if (response?.config?.method !== 'get') message.success(messageText);
      return response?.data?.data;
    }
    message.error(messageText);
    return Promise.reject(new Error(messageText));
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (error.response.status === 401) {
      // 401 代表登录失效
      router.navigate('/login');
    }
    return Promise.reject(error);
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: '#2C4BE5',
      },
    }}
  >
    <HoxRoot>
      <RouterProvider router={router} />
    </HoxRoot>
  </ConfigProvider>,
);
