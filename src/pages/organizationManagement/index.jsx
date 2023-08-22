import { useRequest } from 'ahooks';
import { Button, Checkbox, Col, message, Row, Tree } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';
import service from './service';

export default () => {
  const [treeData, setTreeData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);

  const { data: roleList = [] } = useRequest(service.getRoleList);

  const { runAsync: getGroupList } = useRequest(service.getGroupList, {
    onSuccess(data, params) {
      if (params[0] === undefined || params[0] === 1) {
        setTreeData(data);
      }
    },
  });

  const { run: getRoleListByGroupId } = useRequest(
    service.getRoleListByGroupId,
    {
      manual: true,
      onSuccess(data) {
        setCheckedValue(data);
      },
    },
  );

  const { run: editGroup } = useRequest(service.editGroup, {
    manual: true,
  });

  function handleLoadData({ key, children }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      getGroupList(key).then((res) => {
        setTreeData((origin) => updateTreeData(origin, key, res));
        resolve();
      });
    });
  }

  function handelSelect(selectedKeys) {
    if (selectedKeys.length === 0) return;
    setSelectedKeys(selectedKeys);
    getRoleListByGroupId(selectedKeys);
  }

  function handleCheckboxChange(checkedValue) {
    setCheckedValue(checkedValue);
  }

  function handleSubmit() {
    if (selectedKeys.length === 0) {
      message.warning('请先选择组织机构');
      return;
    }
    editGroup({ groupId: selectedKeys[0], roleIds: checkedValue });
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.left}>
        <Tree
          selectedKeys={selectedKeys}
          treeData={treeData}
          loadData={handleLoadData}
          onSelect={handelSelect}
          blockNode
        />
      </div>
      <div className={styles.right}>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={handleSubmit}>
            保存
          </Button>
        </div>
        <div>
          <p className={styles.label}>选择角色</p>
          <Checkbox.Group value={checkedValue} onChange={handleCheckboxChange}>
            <Row gutter={[4, 4]}>
              {roleList.map((obj) => (
                <Col key={obj.id} span={24}>
                  <Checkbox value={obj.id}>{obj.name}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
};

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
}
