import axios from 'axios';

function getMenuTree(params) {
  return axios
    .get('/api/auth/permissions/tree', { params })
    .then((res) => formatMenuTree(res));
}

function logout() {
  return axios.post('/api/auth/user/logout');
}

function formatMenuTree(tree) {
  if (!tree) return;
  const list = [];
  for (const obj of tree) {
    if (obj.kind !== 1) continue;
    const newObj = {};
    newObj.key = obj.path;
    newObj.label = obj.name;
    newObj.children = formatMenuTree(obj.children);
    list.push(newObj);
  }
  return list;
}

export default { getMenuTree, logout };
