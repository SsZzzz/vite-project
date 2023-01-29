import { useRequest } from 'ahooks';
import { createStore } from 'hox';
import { useState } from 'react';
import service from './service';

export const [useStore, StoreProvider] = createStore(() => {
  const [params, setParams] = useState({ current: 1, pageSize: 10 });

  const { data, loading } = useRequest(() => service.query(params), {
    refreshDeps: [params],
  });

  return { params, setParams, data, loading };
});
