import axios from 'axios';

function query(params) {
  return axios.get('/api/auth/users', { params });
}

function add(data) {
  data.groupId = data.groupId[data.groupId.length - 1];
  return axios.post('/api/auth/users', data);
}

function del(userId) {
  return axios.delete(`/api/auth/users/${userId}`);
}

function enable(userId, flag) {
  if (flag) return axios.put(`/api/auth/users/${userId}/enable`);
  else return axios.put(`/api/auth/users/${userId}/disable`);
}

function getRoles() {
  return axios.get('/api/auth/allRoles');
}

function getGroupTree() {
  return axios.get('/api/auth/groups/tree');
}

export default { query, add, enable, del, getRoles, getGroupTree };
