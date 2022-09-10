import { Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const items = [
  {
    label: '地图(交通路线)',
    key: '/map',
  },
  {
    label: '地图(flyLine)',
    key: '/map2',
  },
];

export default () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/logo.svg" alt="logo" />
          <span>同盾科技政企研发后台模板</span>
        </div>
        <Menu
          theme="dark"
          selectedKeys={[pathname]}
          mode="horizontal"
          items={items}
          onSelect={({ key }) => navigate(key)}
        />
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
};
