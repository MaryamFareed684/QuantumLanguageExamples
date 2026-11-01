// Walking records: sums, lookups and reshaping nested arrays.
const orders = [
  { id: 1, items: [{ sku: "a", qty: 2, price: 3.5 }, { sku: "b", qty: 1, price: 10 }] },
  { id: 2, items: [{ sku: "a", qty: 1, price: 3.5 }] },
  { id: 3, items: [] },
];
const total = (o) => o.items.reduce((s, i) => s + i.qty * i.price, 0);
console.log(orders.map((o) => [o.id, total(o)]));
const bySku = {};
orders.flatMap((o) => o.items).forEach((i) => { bySku[i.sku] = (bySku[i.sku] ?? 0) + i.qty; });
console.log(bySku);
console.log(orders);
console.log(orders.filter((o) => o.items.length).map((o) => o.items.map((i) => i.sku).join("")));
console.log(JSON.stringify(orders[0]));
