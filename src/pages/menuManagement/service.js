import axios from 'axios';

function query() {
  return axios.get('/api/auth/permissions/tree', { params: { kind: 1 } });
}

function add(data) {
  let { parentId, id } = data;
  if (parentId) parentId = parentId[parentId.length - 1];
  if (id) {
    return axios.put(`/api/auth/permissions/${id}`, { ...data, parentId });
  } else {
    return axios.post('/api/auth/permissions', { ...data, parentId });
  }
}

function del(permissionId) {
  return axios.delete(`/api/auth/permissions/${permissionId}`);
}

export default { query, add, del };
