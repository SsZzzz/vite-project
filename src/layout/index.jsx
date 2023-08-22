import service from '@/services';
import { useGlobalStore } from '@/stores/global';
import { Down, LeftOne, RightOne } from '@icon-park/react';
import { useLocalStorageState, useRequest } from 'ahooks';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import clsx from 'clsx';
import { Resizable } from 're-resizable';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from './components/Tab';
import styles from './index.module.less';
// import { getDefaultOpenKeys } from './utils';

const dropdownMenuItems = [{ key: 'logout', label: '退出登录' }];

export default () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { menuTree } = useGlobalStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const defaultOpenKeys = getDefaultOpenKeys(menuTree, pathname);

  const [siderWidth, setSiderWidth] = useLocalStorageState('siderWidth', {
    defaultValue: 160,
  });
  const [open, setOpen] = useState(true);

  const { run: logout } = useRequest(service.logout, {
    manual: true,
    onSuccess: () => navigate('/login'),
  });

  function handleMenuClick({ key }) {
    if (key === 'logout') logout();
  }

  function handleSelect({ key }) {
    navigate(key);
  }

  return (
    <div className={styles.container}>
      {menuTree && (
        <Resizable
          className={styles.sider}
          handleClasses={{ right: styles.handleDiv }}
          size={{ width: open ? siderWidth : 0, height: '100%' }}
          minWidth={open ? 130 : 0}
          maxWidth={240}
          enable={{ right: open }}
          onResizeStop={(e, direction, ref, d) =>
            setSiderWidth(siderWidth + d.width)
          }
        >
          <div
            style={open ? undefined : { opacity: 1 }}
            className={clsx(
              styles.siderResizeButton,
              !open && styles.closeSiderResizeButton,
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? <LeftOne theme="filled" /> : <RightOne theme="filled" />}
          </div>
          <div className={styles.innerSider}>
            <div className={styles.title}>
              <img src="/home/title.png" alt="title" />
            </div>
            <Menu
              className={styles.menu}
              mode="inline"
              inlineIndent={16}
              items={menuTree}
              selectedKeys={[pathname]}
              // defaultOpenKeys={defaultOpenKeys}
              onSelect={handleSelect}
            />
          </div>
        </Resizable>
      )}
      {menuTree && <Tab />}
      <Space className={styles.avatar}>
        <Avatar size={30} src="/home/avatar.png" />
        <Dropdown
          menu={{
            items: dropdownMenuItems,
            onClick: handleMenuClick,
          }}
        >
          <Space size={4}>
            {userInfo?.nickname}
            <Down />
          </Space>
        </Dropdown>
      </Space>
    </div>
  );
};
