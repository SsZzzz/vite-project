import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.less';

export default () => {
  const navigate = useNavigate();
  return (
    <Result
      className={styles.notAllowed}
      status="403"
      title="403"
      subTitle="对不起, 您无权访问该页面"
      extra={
        <Button type="primary" onClick={() => navigate('/home')}>
          回到首页
        </Button>
      }
    />
  );
};
