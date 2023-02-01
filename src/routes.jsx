import Layout from './layout';
import Home from './pages/home';
import Login from './pages/login';
import NoMatch from './pages/noMatch';
import QueryTable from './pages/queryTable';

// 使用约定式路由,pages下的文件夹名称为path,自动注册.notBelongLayout例外,比如有些 login 不应该在 layout 下,比如 noMatch 的 path 应该是*,不应该是 noMatch
// const pageObj = import.meta.glob('./pages/*/index.jsx', { eager: true });
// const pageList = Object.entries(pageObj).map(([key, mode]) => ({
//   path: `/${key.split('/')[2]}`,
//   element: <mode.default />,
// }));

export default [
  { path: 'login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'queryTable', element: <QueryTable /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
];
