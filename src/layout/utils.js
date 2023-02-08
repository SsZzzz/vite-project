export function getDefaultOpenKeys(tree, pathname, paths = []) {
  if (!tree) return;
  for (const obj of tree) {
    paths.push(obj.key);
    if (obj.key === pathname) return paths;
    const res = getDefaultOpenKeys(obj.children, pathname, paths);
    if (res?.length) return res;
    paths.pop();
  }
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
