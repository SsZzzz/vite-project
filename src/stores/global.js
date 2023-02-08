import service from '@/services';
import { useRequest } from 'ahooks';
import { createGlobalStore } from 'hox';

export const [useGlobalStore, getGlobalStore] = createGlobalStore(() => {
  const { data: menuTree, refresh: refreshMenuTree } = useRequest(
    service.getMenuTree,
  );

  return { menuTree, refreshMenuTree };
});
