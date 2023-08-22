import axios from 'axios';

// 根据树种任意一节点,获取根节点到此节点的完整路径
export function getFullPath(
  target,
  list,
  fieldNames = { value: 'value', children: 'children' },
  paths = [],
) {
  if (!list?.length) return [];
  for (const {
    [fieldNames.value || 'value']: value,
    [fieldNames.children || 'children']: children,
  } of list) {
    paths.push(value);
    if (target === value) return paths;
    const res = getFullPath(target, children, fieldNames, paths);
    if (res.length) return res;
    paths.pop();
  }
  return [];
}

export function transformCode(value, options, label = 'label') {
  if (value === null || value === undefined || value === '') return '';
  if (options)
    return options.find(
      (obj) => obj.value === value || Number(obj.value) === Number(value),
    )?.[label];
}

// 格式化json
export function parseJSON(str) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return obj;
      }
    } catch (e) {}
  }
}

export function setRequestHeaderToken() {
  const userInfo = parseJSON(localStorage.getItem('userInfo'));
  axios.defaults.headers.common.Authorization = 'Bearer ' + userInfo?.token;
}

// 客户端验证token
export function validateJwt(token) {
  if (!token) {
    return false;
  }
  const [, payload] = token.split('.');
  const decodedPayload = parseJSON(window.atob(payload));
  if (!decodedPayload.exp || Number.isNaN(decodedPayload.exp)) {
    return false;
  }
  const now = Date.now() / 1000;
  return now < decodedPayload.exp;
}
