import Map1 from './pages/map1';
import Map2 from './pages/map2';
import Map3 from './pages/map3';

// 使用约定式路由,pages下的文件夹名称为path,自动注册.notBelongLayout例外,比如有些 login 不应该在 layout 下,比如 noMatch 的 path 应该是*,不应该是 noMatch
// const pageObj = import.meta.glob('./pages/*/index.jsx', { eager: true });
// const pageList = Object.entries(pageObj).map(([key, mode]) => ({
//   path: `/${key.split('/')[2]}`,
//   element: <mode.default />,
// }));

export default [
  { path: '/map1', element: <Map1 /> },
  { path: '/map2', element: <Map2 /> },
  { path: '/map3', element: <Map3 /> },
];
