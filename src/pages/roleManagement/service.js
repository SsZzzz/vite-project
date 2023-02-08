import axios from 'axios';

function getPermissionsTree() {
  return axios.get('/api/auth/permissions/tree');
}

function getPermissions(roleId) {
  return axios
    .get(`/api/auth/roles/${roleId}/permissions`)
    .then((res) => (res || []).map((obj) => obj.permissionId));
}

function query() {
  return axios
    .get('/api/auth/roles', { params: { pageSize: 100 } })
    .then((res) => res.list);
}

function add(data) {
  const { id, ...rest } = data;
  if (id) return axios.put(`/api/auth/roles/${id}`, rest);
  return axios.post('/api/auth/roles', rest);
}

function del(roleId) {
  return axios.delete(`/api/auth/roles/${roleId}`);
}

function addPermissions(data) {
  const { roleId, ids } = data;
  return axios.post(`/api/auth/roles/${roleId}/permissions`, { ids });
}

export default {
  getPermissionsTree,
  getPermissions,
  query,
  add,
  del,
  addPermissions,
};
