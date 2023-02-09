import { Button, DatePicker, Form, Input, Table } from 'antd';
import { StoreProvider, useStore } from './store';

const columns = [
  { title: 'id', dataIndex: 'id' },
  {
    title: '名字',
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
];

function App() {
  const { params, setParams, data, loading } = useStore();
  const [form] = Form.useForm();

  function onFinish(values) {
    setParams({ ...params, ...values, current: 1 });
  }

  function handleTableChange({ current, pageSize }, filters, { field, order }) {
    setParams({ ...params, current, pageSize, field, order });
  }

  return (
    <div>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="搜索项A" name="A">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="时间筛选" name="date">
          <DatePicker />
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
      />
    </div>
  );
}

export default () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);
