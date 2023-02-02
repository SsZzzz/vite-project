// import service from '@/services';
// import { useRequest } from 'ahooks';
import { createGlobalStore } from 'hox';

export const [useGlobalStore, getGlobalStore] = createGlobalStore(() => {
  // const { data: menuTree, refresh: refreshMenuTree } = useRequest(
  //   service.getMenuTree,
  // );
  const menuTree = [
    { label: '首页', key: '/home' },
    { label: '用户管理', key: '/userManagement' },
  ];
  function refreshMenuTree() {}

  return { menuTree, refreshMenuTree };
});
