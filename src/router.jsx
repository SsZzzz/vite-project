import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import NotFound from './pages/404';
import Home from './pages/home';
import Login from './pages/login';
import MenuManagement from './pages/menuManagement';
import QueryTable from './pages/queryTable';
import QueryTableWithHox from './pages/queryTableWithHox';
import RoleManagement from './pages/roleManagement';
import UserManagement from './pages/userManagement';

// 使用约定式路由,pages下的文件夹名称为path,自动注册.notBelongLayout例外,比如有些 login 不应该在 layout 下,比如 NotFound 的 path 应该是*,不应该是 NotFound
// const pageObj = import.meta.glob('./pages/*/index.jsx', { eager: true });
// const pageList = Object.entries(pageObj).map(([key, mode]) => ({
//   path: `/${key.split('/')[2]}`,
//   element: <mode.default />,
// }));

export default createBrowserRouter([
  { path: '/login', title: '登录', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/home', title: '首页', element: <Home /> },
      { path: '/queryTable', title: '表格查询demo', element: <QueryTable /> },
      {
        path: '/queryTableWithHox',
        title: '表格查询demo(hox)',
        element: <QueryTableWithHox />,
      },
      {
        path: '/menuManagement',
        title: '菜单管理',
        element: <MenuManagement />,
      },
      {
        path: '/userManagement',
        title: '用户管理',
        element: <UserManagement />,
      },
      {
        path: '/roleManagement',
        title: '角色管理',
        element: <RoleManagement />,
      },
      { path: '/queryTable', title: '表格查询demo', element: <QueryTable /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
