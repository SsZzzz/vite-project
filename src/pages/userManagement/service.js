import axios from 'axios';

function query(params) {
  const { groupId, ...rest } = params;
  return axios.get(`/api/auth/groups/${groupId}/users`, { params: rest });
}

function getGroupList(rootId = 1) {
  return axios.get('/api/auth/groups/tree', { params: { rootId } });
}

export default { query, getGroupList };
