import { useRequest } from 'ahooks';
import { useState } from 'react';
import { createContainer } from 'unstated-next';
import service from './service';

function useStore() {
  const [params, setParams] = useState({ current: 1, pageSize: 10 });

  const { data, loading } = useRequest(() => service.query(params), {
    refreshDeps: [params],
  });

  return { params, setParams, data, loading };
}

export default createContainer(useStore);
