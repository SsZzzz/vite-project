import { getFullPath } from '@/utils';
import { Delete, Editor, Plus } from '@icon-park/react';
import { useRequest } from 'ahooks';
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
} from 'antd';
import { useState } from 'react';
import service from './service';

const kindOptions = [
  { label: '页面', value: 1 },
  { label: '接口', value: 2 },
  { label: '按钮', value: 3 },
];

export default () => {
  const [addedForm] = Form.useForm();

  const [open, setOpen] = useState(false);

  const { data, loading, refresh } = useRequest(service.query);

  const { run: add, loading: addLoading } = useRequest(service.add, {
    manual: true,
    onSuccess: () => {
      refresh();
      handleModalClose();
    },
  });
  const { run: del } = useRequest(service.del, {
    manual: true,
    onSuccess: () => {
      refresh();
    },
  });

  function handleModalClose() {
    setOpen(false);
    addedForm.resetFields();
  }

  function handleAdd(values) {
    add(values);
  }

  function handleEdit(record) {
    setOpen(true);
    addedForm.setFieldsValue({
      ...record,
      parentId: getFullPath(record.parentId, data, { value: 'id' }),
    });
  }

  const columns = [
    { title: '名称', dataIndex: 'name' },
    { title: '路径 / key', dataIndex: 'path' },
    { title: '排列序号', dataIndex: 'sort' },
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
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<Plus />} onClick={() => setOpen(true)}>
          新增
        </Button>
      </div>
      <Table
        rowKey="id"
        dataSource={data}
        columns={columns}
        loading={loading}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
      <Modal
        title="新增/修改菜单"
        open={open}
        confirmLoading={addLoading}
        onOk={addedForm.submit}
        onCancel={handleModalClose}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          form={addedForm}
          name="addedForm"
          onFinish={handleAdd}
        >
          {/* 编辑时候需要传 */}
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="名称" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            name="path"
            label="路径 / key"
            rules={[{ required: true }]}
            tooltip="如果是菜单,前面加'/',如果是目录,前面不要加'/',所有 key 保持唯一"
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            name="code"
            label="code"
            rules={[{ required: true }]}
            tooltip="随便填,暂时没用"
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="kind" label="权限类型" rules={[{ required: true }]}>
            <Select placeholder="请选择" options={kindOptions} />
          </Form.Item>
          <Form.Item name="parentId" label="父菜单">
            <Cascader
              placeholder="请选择"
              options={data}
              fieldNames={{ label: 'name', value: 'id' }}
              changeOnSelect
              showSearch
              allowClear
            />
          </Form.Item>
          <Form.Item name="sort" label="排列序号" tooltip="建议 10 的倍数">
            <InputNumber placeholder="请输入" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
