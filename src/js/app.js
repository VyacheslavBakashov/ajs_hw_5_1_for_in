export default function orderByProps(obj, rule) {
  const arr = [];
  for (const key in obj) {
    if (!rule.includes(key)) {
      arr.push(key);
    }
  }
  rule.push(...arr.sort((a, b) => a.localeCompare(b)));
  return rule.map((elm) => ({ key: elm, value: obj[elm] }));
}
