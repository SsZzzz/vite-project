export function getDefaultOpenKeys(items, res = []) {
  if (!items) return;
  for (const item of items) {
    if (!item.key.includes('/')) res.push(item.key);
    getDefaultOpenKeys(item.children, res);
  }
  return res;
}

export function getRoute(routes, pathname) {
  if (!routes) return;
  for (const item of routes) {
    if (item.path === pathname) return item;
    const res = getRoute(item.children, pathname);
    if (res) return res;
  }
}

export function determineIsAccess(menuTree, pathname) {
  if (!menuTree) return false;
  let ans = false;
  for (const item of menuTree) {
    ans =
      ans ||
      item.key === pathname ||
      determineIsAccess(item.children, pathname);
  }
  return ans;
}
