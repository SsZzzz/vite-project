import axios from 'axios';

function getGroupList(rootId = 1) {
  return axios
    .get('/api/auth/groups/tree', { params: { rootId } })
    .then((res) =>
      (res || []).map((obj) => ({
        title: obj.name,
        key: obj.id,
        isLeaf: !!obj.leaf,
      })),
    );
}

function getRoleList() {
  return axios
    .get('/api/auth/roles', { params: { pageSize: 10000 } })
    .then((res) => res.list);
}

function getRoleListByGroupId(groupId) {
  return axios
    .get(`/api/auth/groups/${groupId}/roles`)
    .then((res) => (res.list || []).map((obj) => obj.id));
}

function editGroup(data) {
  const { groupId, roleIds } = data;
  return axios.put(`/api/auth/groups/${groupId}`, { roleIds });
}

export default { getGroupList, getRoleList, getRoleListByGroupId, editGroup };
