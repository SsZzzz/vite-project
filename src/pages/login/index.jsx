import { useGlobalStore } from '@/stores/global';
import { Lock, User } from '@icon-park/react';
import { useRequest } from 'ahooks';
import { Button, Col, Form, Input, Row, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import service from './service';

export default () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { refreshMenuTree } = useGlobalStore();

  const { data, refresh, loading } = useRequest(service.getCaptcha);

  const { run: login, loading: loginLoading } = useRequest(service.login, {
    manual: true,
    onError: () => refresh(),
    onSuccess: (res) => {
      localStorage.setItem('userInfo', JSON.stringify(res));
      refreshMenuTree();
      navigate('/home');
    },
  });

  function onFinish(values) {
    login({ ...values, captchaId: data.captchaId });
  }

  return (
    <div className={styles.loginContainer}>
      <Row className={styles.loginBox}>
        <Col span={14} className={styles.loginImage} />
        <Col span={10} className={styles.formBox}>
          <h1>登录</h1>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: '请输入邮箱' }]}
            >
              <Input
                size="large"
                prefix={<User size="18" fill="#C8C9CC" />}
                placeholder="请输入用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                size="large"
                prefix={<Lock size="18" fill="#C8C9CC" />}
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item noStyle>
              <Form.Item
                name="code"
                rules={[{ required: true, message: '请输入验证码' }]}
                className={styles.verificationItem}
              >
                <Input size="large" placeholder="请输入验证码" />
              </Form.Item>
              <Spin
                spinning={loading}
                wrapperClassName={styles.verificationContainer}
              >
                <img
                  src={`data:img/jpg;base64,${data?.captcha}`}
                  onClick={refresh}
                />
              </Spin>
            </Form.Item>
            <Form.Item>
              <Button
                className={styles.button}
                size="large"
                type="primary"
                htmlType="submit"
                loading={loginLoading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
