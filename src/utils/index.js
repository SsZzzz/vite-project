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
    const res = getFullPath(target, children, paths);
    if (res.length) return res;
    paths.pop();
  }
  return [];
}
