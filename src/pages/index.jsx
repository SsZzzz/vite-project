import routes from '@/routes';
import { useRoutes } from 'react-router-dom';

export default () => {
  const element = useRoutes(routes);

  return element;
};
