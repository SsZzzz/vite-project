import axios from 'axios';

function query(params) {
  return axios.get('/api/auth/roles', { params });
}

function queryMenuTree() {
  return axios.get('/api/auth/permissions/tree', { params: { kind: 1 } });
}

function queryMenuList(id) {
  return axios
    .get(`/api/auth/roles/${id}/permissions`, {
      params: { kind: 1, pageSize: 10000 },
    })
    .then((res) => (res?.list || []).map((obj) => obj.id));
}

function add(data) {
  const { id, ...rest } = data;
  if (id) return axios.put(`/api/auth/roles/${id}`, rest);
  return axios.post('/api/auth/roles', rest);
}

function del(roleId) {
  return axios.delete(`/api/auth/roles/${roleId}`);
}

export default {
  query,
  queryMenuTree,
  queryMenuList,
  add,
  del,
};
