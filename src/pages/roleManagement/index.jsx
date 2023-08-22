import { Close, Delete, Editor, Plus } from '@icon-park/react';
import { useRequest } from 'ahooks';
import {
  Button,
  Drawer,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  TreeSelect,
} from 'antd';
import { useState } from 'react';
import service from './service';

const { TextArea } = Input;

export default () => {
  const [form] = Form.useForm();
  const [addedForm] = Form.useForm();

  const [params, setParams] = useState({ current: 1, pageSize: 10 });
  const [open, setOpen] = useState(false);

  const { data, loading, refresh } = useRequest(() => service.query(params), {
    refreshDeps: [params],
  });
  const { data: menuTree } = useRequest(service.queryMenuTree);
  const { runAsync: queryMenuList } = useRequest(service.queryMenuList, {
    manual: true,
  });
  const { run: add, loading: addLoading } = useRequest(service.add, {
    manual: true,
    onSuccess: () => {
      refresh();
      handleClose();
    },
  });
  const { run: del } = useRequest(service.del, {
    manual: true,
    onSuccess: () => {
      refresh();
    },
  });

  function onFinish(values) {
    setParams({ ...params, ...values, current: 1 });
  }

  function handleTableChange({ current, pageSize }, filters, { field, order }) {
    setParams({ ...params, current, pageSize, field, order });
  }

  function handleClose() {
    setOpen(false);
    addedForm.resetFields();
  }

  async function handleEdit(data) {
    setOpen(true);
    const list = await queryMenuList(data.id);
    const defaultData = { ...data, permissionIds: list };
    addedForm.setFieldsValue(defaultData);
  }

  const columns = [
    { title: '角色名称', dataIndex: 'name' },
    { title: '角色描述', dataIndex: 'description' },
    {
      title: '操作',
      dataIndex: 'operation',
      fixed: 'right',
      render: (text, record) => (
        <Space>
          <Button
            type="link"
            icon={<Editor />}
            onClick={() => handleEdit(record)}
          />
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
        <Form.Item label="角色名称" name="keyword">
          <Input style={{ width: 180 }} placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Button
        style={{ marginBottom: 16 }}
        type="primary"
        icon={<Plus />}
        onClick={() => setOpen(true)}
      >
        新增
      </Button>
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
      <Drawer
        title="新增/修改角色"
        placement="right"
        width={600}
        onClose={handleClose}
        open={open}
        closable={false}
        extra={<Button type="text" icon={<Close />} onClick={handleClose} />}
      >
        <Form
          labelCol={{ flex: '80px' }}
          wrapperCol={{ flex: 'auto' }}
          form={addedForm}
          onFinish={add}
        >
          {/* 编辑时候需要传 */}
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="角色名称" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="code" label="角色代码" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            name="permissionIds"
            label="菜单权限"
            rules={[{ required: true }]}
          >
            <TreeSelect
              placeholder="请选择"
              treeData={menuTree}
              fieldNames={{ label: 'name', value: 'id' }}
              treeNodeFilterProp="name"
              treeCheckable
              showSearch
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="角色描述"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} placeholder="请输入" />
          </Form.Item>
          <Space size={16}>
            <Button type="primary" htmlType="submit" loading={addLoading}>
              确定
            </Button>
            <Button onClick={handleClose}>取消</Button>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
};
