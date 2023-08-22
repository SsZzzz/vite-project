import { useRequest } from 'ahooks';
import { Button, DatePicker, Form, Table } from 'antd';
import { useState } from 'react';
import service from './service';

const { RangePicker } = DatePicker;
const columns = [
  { title: '操作时间', dataIndex: 'operateTime' },
  { title: '操作描述', dataIndex: 'result' },
  { title: '操作类型', dataIndex: 'operationType' },
  { title: '模块名称', dataIndex: '' },
  { title: '用户名', dataIndex: 'userId' },
  { title: '所属部门', dataIndex: '' },
  { title: '是否主职', dataIndex: '' },
  { title: '访问IP', dataIndex: '' },
];

export default () => {
  const [form] = Form.useForm();
  const [params, setParams] = useState({ current: 1, pageSize: 10 });

  const { data, loading } = useRequest(() => service.query(params), {
    refreshDeps: [params],
  });

  function onFinish(values) {
    setParams({ ...params, ...values, current: 1 });
  }

  function handleTableChange({ current, pageSize }, filters, { field, order }) {
    setParams({ ...params, current, pageSize, field, order });
  }

  return (
    <div>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="时间范围" name="time">
          <RangePicker showTime />
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
  );
};
