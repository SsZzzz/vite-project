import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

export default () => {
  const navigate = useNavigate();
  return (
    <Result
      className={styles.notFound}
      status="404"
      title="404"
      subTitle="对不起, 您访问的页面不存在, 请检查您的地址是否输入正确"
      extra={
        <Button type="primary" onClick={() => navigate('/home')}>
          回到首页
        </Button>
      }
    />
  );
};
