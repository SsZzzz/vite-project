import { transformCode } from '@/utils';
import { useRequest } from 'ahooks';
import { Button, Form, Input, Spin, Table } from 'antd';
import clsx from 'clsx';
import { cloneDeep } from 'lodash-es';
import { useState } from 'react';
import styles from './index.module.less';
import service from './service';

const options = [
  { label: '是', value: 1 },
  { label: '否', value: 0 },
];

export default () => {
  const [form] = Form.useForm();
  const [breadcrumbList, setBreadcrumbList] = useState([
    { title: '全部', key: 1 },
  ]);
  const [params, setParams] = useState({ current: 1, pageSize: 10 });

  const {
    data: groupList = [],
    loading: groupLoading,
    run: getGroupList,
  } = useRequest(service.getGroupList);

  const { data, loading } = useRequest(() => service.query(params), {
    refreshDeps: [params],
    ready: params.groupId !== undefined,
  });

  function handleNextOrgList(data) {
    if (data.leaf === 0) {
      const cloneBreadcrumbList = cloneDeep(breadcrumbList);
      cloneBreadcrumbList.push({ title: data.name, key: data.id });
      setBreadcrumbList(cloneBreadcrumbList);
      getGroupList(data.id);
    } else {
      setParams({ ...params, groupId: data.id });
    }
  }

  function handleBreadcrumbItemClick(data) {
    getGroupList(data.key);
    setParams({ ...params, groupId: undefined });
    const index = breadcrumbList.findIndex((obj) => obj.key === data.key);
    const newBreadcrumbList = cloneDeep(breadcrumbList).slice(0, index + 1);
    setBreadcrumbList(newBreadcrumbList);
  }

  function onFinish(values) {
    setParams({ ...params, ...values, current: 1 });
  }

  function handleTableChange({ current, pageSize }) {
    setParams({ ...params, current, pageSize });
  }

  const columns = [
    { title: '用户姓名', dataIndex: 'nickname' },
    {
      title: '是否主职',
      dataIndex: 'mainJob',
      render: (v) => transformCode(v, options),
    },
  ];

  return (
    <div className={styles.userContainer}>
      <div className={styles.left}>
        <div className={styles.breadcrumbBox}>
          {breadcrumbList.map((obj) => (
            <div key={obj.key} onClick={() => handleBreadcrumbItemClick(obj)}>
              {obj.title}
            </div>
          ))}
        </div>
        <Spin spinning={groupLoading}>
          {groupList.map((obj) => (
            <p
              className={clsx(
                styles.org,
                obj.id === params.groupId && styles.active,
              )}
              key={obj.id}
              onClick={() => handleNextOrgList(obj)}
            >
              {obj.name}
            </p>
          ))}
        </Spin>
      </div>
      <div className={styles.right}>
        <Form form={form} layout="inline" onFinish={onFinish}>
          <Form.Item label="用户姓名" name="keyword">
            <Input style={{ width: 180 }} placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
        <Table
          rowKey="id"
          dataSource={data?.list}
          columns={columns}
          loading={loading}
          onChange={handleTableChange}
          pagination={{
            current: params.current,
            pageSize: params.pageSize,
            total: data?.total,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </div>
  );
};
