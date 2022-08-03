import Layout from './layout';
import Login from './pages/notBelongLayout/login';
import NoMatch from './pages/notBelongLayout/noMatch';

// 使用约定式路由,pages 下的文件夹名称为 path,自动注册.notBelongLayout 例外,比如有些 login 不应该在 layout 下,比如 noMatch 的 path 应该是*,不应该是 noMatch
const pageObj = import.meta.glob('./pages/*/index.jsx', { eager: true });
const pageList = Object.entries(pageObj).map(([key, mode]) => ({
  path: `/${key.split('/')[2]}`,
  element: <mode.default />,
}));

export default [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [...pageList, { path: '*', element: <NoMatch /> }],
  },
];
