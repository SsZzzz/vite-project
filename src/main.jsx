import '@icon-park/react/styles/index.css';
import { ConfigProvider, message } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.less';
import App from './pages';

dayjs.locale('zh-cn');

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    if (response?.data instanceof Blob) {
      return response.data;
    }
    const { data, success, message: messageText } = response?.data || {};
    if (success) {
      // 没有数据返回就代表它是增删改,增删改即使请求成功也返回消息告知用户
      if (data === undefined) message.success(messageText);
      return response?.data?.data;
    }
    message.error(messageText);
    return Promise.reject(new Error(messageText));
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (error.response.status === 401) {
      history.push('/login');
    }
    return Promise.reject(error);
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#2C4BE5',
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);
