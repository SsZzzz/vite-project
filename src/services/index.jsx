import axios from 'axios';

const iconObj = {};

function getMenuTree(params) {
  return axios
    .get('/api/auth/permissions/tree', { params: { kind: 1 } })
    .then((res) => formatMenuTree(res));
}

function logout() {
  return axios.post('/api/auth/logout');
}

function formatMenuTree(tree, level = 0) {
  if (!tree) return;
  const list = [];
  for (const obj of tree) {
    if (obj.kind !== 1) continue;
    const newObj = {};
    newObj.key = obj.path;
    newObj.label = obj.name;
    if (level === 0) newObj.icon = iconObj[obj.name];
    newObj.children = formatMenuTree(obj.children, level + 1);
    list.push(newObj);
  }
  return list;
}

export default { getMenuTree, logout };
