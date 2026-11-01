// An inventory: add, remove, restock and a value report.
const inv = {};
const add = (sku, name, qty, price) => { inv[sku] = { name, qty, price }; };
const remove = (sku, n) => {
  const it = inv[sku];
  if (!it) return `no such sku ${sku}`;
  if (it.qty < n) return `only ${it.qty} of ${it.name}`;
  it.qty -= n;
  return `removed ${n} ${it.name}`;
};
add("A1", "bolt", 100, 0.25); add("B2", "nut", 50, 0.1); add("C3", "gear", 5, 12.5);
console.log(remove("A1", 10), "|", remove("C3", 6), "|", remove("Z9", 1));
for (const [sku, { name, qty, price }] of Object.entries(inv)) console.log(sku, name.padEnd(5), String(qty).padStart(3), (qty * price).toFixed(2).padStart(7));
console.log("total", Object.values(inv).reduce((s, i) => s + i.qty * i.price, 0).toFixed(2));
