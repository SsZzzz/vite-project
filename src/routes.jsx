import Layout from './layout';
import Home from './pages/home';
import NoMatch from './pages/noMatch';
import QueryTable from './pages/queryTable';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/queryTable', element: <QueryTable /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
];
