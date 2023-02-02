import NotAllowed from '@/pages/403';
import NotFound from '@/pages/404';
import router from '@/router';
import { useGlobalStore } from '@/stores/global';
import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
import styles from '../index.module.less';
import { determineIsAccess, getRoute } from '../utils';

export default () => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { menuTree } = useGlobalStore();
  const [tabs, setTabs] = useState([]);
  const [errorPage, setErrorPage] = useState(0);

  useEffect(() => {
    const index = tabs.findIndex((obj) => obj.key === pathname);
    if (index === -1) {
      const routes = router.routes;
      const route = getRoute(routes, pathname);
      const isAccess = determineIsAccess(menuTree, pathname);
      if (!route) setErrorPage(404);
      else if (!isAccess) setErrorPage(403);
      else {
        // 最大只支持同时打开 6 个 tabs,太多会有性能问题
        const originTabs = [...tabs];
        if (originTabs.length > 5) originTabs.shift();
        const newTabs = [
          ...originTabs,
          { key: route.path, label: route.title, children: outlet },
        ];
        if (newTabs.length > 1) {
          newTabs.forEach((obj) => (obj.closable = true));
        } else {
          newTabs.forEach((obj) => (obj.closable = false));
        }
        setTabs(newTabs);
        setErrorPage(0);
      }
    } else {
      // 这行代码到正式上线时应该没什么用,但在开发时,由于路由已经建好了,但还没有页面,所以点击会 404,然后点 404 的返回首页后没效果
      setErrorPage(0);
    }
  }, [pathname]);

  function handleTabChange(key) {
    navigate(key);
  }

  function handleTabEdit(targetKey) {
    const index = tabs.findIndex((obj) => obj.key === targetKey);
    const originTabs = [...tabs];
    originTabs.splice(index, 1);
    if (originTabs.length > 1) {
      originTabs.forEach((obj) => (obj.closable = true));
    } else {
      originTabs.forEach((obj) => (obj.closable = false));
    }
    setTabs(originTabs);
    if (targetKey === pathname) {
      // 如果删除的tab就是active的话,就跳转到后一个tab,如果删的是最后一个tab,就跳转到前一个tab
      if (index === tabs.length - 1) navigate(originTabs[index - 1].key);
      else navigate(originTabs[index].key);
    }
  }

  return (
    // id给rnd使用
    <div id="tabContainer" className={styles.tabContainer}>
      {errorPage === 404 && <NotFound />}
      {errorPage === 403 && <NotAllowed />}
      {errorPage === 0 && (
        <Tabs
          type="editable-card"
          items={tabs}
          activeKey={pathname}
          onChange={handleTabChange}
          onEdit={handleTabEdit}
          hideAdd
        />
      )}
    </div>
  );
};
