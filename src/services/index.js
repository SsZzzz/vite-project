import axios from 'axios';

function getMenuTree(params) {
  return axios.get('/api/auth/permissions/tree', { params });
}

function logout() {
  return axios.post('/api/auth/user/logout');
}

export default { getMenuTree, logout };
