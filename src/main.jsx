import '@icon-park/react/styles/index.css';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.less';
import App from './pages/index';

moment.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
