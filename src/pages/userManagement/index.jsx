import { Delete, Plus } from '@icon-park/react';
import { useRequest } from 'ahooks';
import {
  Button,
  Cascader,
  Drawer,
  Form,
  Input,
  Popconfirm,
  Select,
  Space,
  Switch,
  Table,
} from 'antd';
import { useState } from 'react';
import service from './service';

const options = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 },
];

export default () => {
  const [form] = Form.useForm();
  const [addedForm] = Form.useForm();
  const [params, setParams] = useState({ current: 1, pageSize: 10 });
  const [open, setOpen] = useState(false);

  const { data, loading, refresh } = useRequest(() => service.query(params), {
    refreshDeps: [params],
  });
  const { run: add, loading: addLoading } = useRequest(service.add, {
    manual: true,
    onSuccess: () => {
      refresh();
      handleDrawerClose();
    },
  });
  const { run: del } = useRequest(service.del, {
    manual: true,
    onSuccess: () => {
      refresh();
    },
  });
  const { run: enable } = useRequest(service.enable, {
    manual: true,
    onSuccess: () => {
      refresh();
    },
  });
  const { data: roleList } = useRequest(service.getRoles);
  const { data: groupTree } = useRequest(service.getGroupTree);

  function onFinish(values) {
    setParams({ ...params, ...values, current: 1 });
  }

  function handleTableChange({ current, pageSize }) {
    setParams({ ...params, current, pageSize });
  }

  function handleDrawerClose() {
    setOpen(false);
    addedForm.resetFields();
  }

  function handleAdd(values) {
    add(values);
  }

  const columns = [
    { title: '用户名', dataIndex: 'loginName' },
    { title: '真实姓名', dataIndex: 'realName' },
    { title: '邮箱', dataIndex: 'email' },
    { title: '手机号码', dataIndex: 'mobile' },
    {
      title: '角色',
      dataIndex: 'roles',
      render: (list) => list.map((obj) => obj.name).toString(),
    },
    {
      title: '部门',
      dataIndex: 'groups',
      render: (list) => list.map((obj) => obj.name).toString(),
    },
    {
      title: '启用状态',
      dataIndex: 'enabled',
      render: (v, r) => (
        <Switch
          checkedChildren="启用"
          unCheckedChildren="禁用"
          checked={r.enabled === 1}
          onChange={(checked) => enable(r.id, checked)}
        />
      ),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      fixed: 'right',
      render: (text, record) => (
        <Space>
          {/* <Button
            type="link"
            size="small"
            icon={<Editor />}
            onClick={() => handleEdit(record)}
          /> */}
          <Popconfirm title="是否确认删除?" onConfirm={() => del(record.id)}>
            <Button type="link" icon={<Delete />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="用户名" name="name">
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item label="状态" name="state">
          <Select
            style={{ width: 196 }}
            placeholder="请选择"
            options={options}
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<Plus />} onClick={() => setOpen(true)}>
          新增
        </Button>
      </div>
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
      />
      <Drawer
        width={600}
        closable={false}
        onClose={handleDrawerClose}
        open={open}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={addedForm}
          onFinish={handleAdd}
        >
          <Form.Item
            name="loginName"
            label="用户名"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            name="realName"
            label="真实姓名"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="mobile" label="手机号码">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true }]}>
            <Input.Password placeholder="请输入" />
          </Form.Item>
          <Form.Item
            name="checkPassword"
            label="确认密码"
            rules={[
              { required: true },
              {
                validator(_, value) {
                  if (!value || addedForm.getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('密码不一致'));
                },
              },
            ]}
            dependencies={['password']}
          >
            <Input.Password placeholder="请输入" />
          </Form.Item>
          <Form.Item name="roleIds" label="角色" rules={[{ required: true }]}>
            <Select
              placeholder="请选择"
              options={roleList}
              fieldNames={{ label: 'name', value: 'id' }}
              mode="multiple"
            />
          </Form.Item>
          <Form.Item name="groupId" label="部门" rules={[{ required: true }]}>
            <Cascader
              options={groupTree}
              placeholder="请选择"
              fieldNames={{ label: 'name', value: 'id' }}
              changeOnSelect
              showSearch
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit" loading={addLoading}>
              确定
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};
