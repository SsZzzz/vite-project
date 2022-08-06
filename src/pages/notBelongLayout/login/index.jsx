import { Lock, User } from '@icon-park/react';
import { Button, Form, Input } from 'antd';
import styles from './index.module.less';

export default () => {
  function onFinish() {}

  return (
    <div className={styles.loginContainer}>
      <div>
        <div className={styles.title}>
          <img src="/logo2.svg" alt="logo" />
          <span>/</span>
          <span>专注于智能分析与决策</span>
        </div>
        <div className={styles.box}>
          <Form name="loginForm" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input
                placeholder="请输入用户名"
                prefix={<User fill="#C8C9CC" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                placeholder="请输入密码"
                prefix={<Lock fill="#C8C9CC" />}
              />
            </Form.Item>
            <Button className={styles.button} type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
