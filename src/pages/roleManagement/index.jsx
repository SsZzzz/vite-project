import { Delete, Editor, Plus } from '@icon-park/react';
import { useRequest } from 'ahooks';
import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Space,
  Table,
  Tree,
} from 'antd';
import { useState } from 'react';
import styles from './index.module.less';
import service from './service';

export default () => {
  const [addedForm] = Form.useForm();

  const [open, setOpen] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { data: menuTree } = useRequest(service.getPermissionsTree);
  const {
    data: roleList,
    loading,
    refresh,
  } = useRequest(service.query, {
    onSuccess: (res) => {
      const index = res.findIndex((obj) => obj.id === selectedRowKeys[0]);
      if (index < 0) handleRowSelect(res[0] || {});
    },
  });
  const { run: add, loading: addLoading } = useRequest(service.add, {
    manual: true,
    onSuccess: () => {
      refresh();
      handleModalClose();
    },
  });
  const { run: addPermissions } = useRequest(service.addPermissions, {
    manual: true,
    onError: (e, { roleId }) => {
      setCheckedKeysByRole(roleId);
    },
  });
  const { run: del } = useRequest(service.del, {
    manual: true,
    onSuccess: () => {
      refresh();
    },
  });
  const { run: setCheckedKeysByRole } = useRequest(service.getPermissions, {
    manual: true,
    onSuccess: (res) => {
      setCheckedKeys(res);
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
    addedForm.setFieldsValue(record);
  }

  function handleRowSelect({ id }) {
    if (!id) return;
    setSelectedRowKeys([id]);
    setCheckedKeysByRole(id);
  }

  function handleAddPermissions() {
    const roleId = selectedRowKeys[0];
    addPermissions({ roleId, ids: checkedKeys });
  }

  const columns = [
    { title: '名称', dataIndex: 'name' },
    { title: '描述', dataIndex: 'description' },
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
    <div className={styles.userContainer}>
      <div>
        <Button type="primary" icon={<Plus />} onClick={() => setOpen(true)}>
          新增
        </Button>
        <Table
          className={styles.table}
          rowKey="id"
          dataSource={roleList}
          columns={columns}
          loading={loading}
          pagination={false}
          onRow={(record) => ({
            onClick: () => handleRowSelect(record),
          })}
          rowSelection={{
            type: 'radio',
            onSelect: handleRowSelect,
            selectedRowKeys,
          }}
        />
      </div>
      <div>
        <Button
          style={{ marginBottom: 16 }}
          type="primary"
          onClick={handleAddPermissions}
        >
          保存修改
        </Button>
        {menuTree && (
          <Tree
            treeData={menuTree}
            fieldNames={{ title: 'name', key: 'id' }}
            selectable={false}
            checkedKeys={checkedKeys}
            onCheck={setCheckedKeys}
            defaultExpandAll
            checkable
          />
        )}
      </div>
      <Modal
        title="新增/修改角色"
        open={open}
        confirmLoading={addLoading}
        onOk={addedForm.submit}
        onCancel={handleModalClose}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          form={addedForm}
          onFinish={handleAdd}
        >
          {/* 编辑时候需要传 */}
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="名称" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="code" label="code" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <Input placeholder="请输入" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
