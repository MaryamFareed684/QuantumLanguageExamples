// A shopping cart with discounts and tax.
function cart() {
  const lines = [];
  return {
    add(name, price, qty = 1) { const l = lines.find((x) => x.name === name); l ? (l.qty += qty) : lines.push({ name, price, qty }); return this; },
    drop(name) { const i = lines.findIndex((x) => x.name === name); if (i >= 0) lines.splice(i, 1); return this; },
    subtotal() { return lines.reduce((s, l) => s + l.price * l.qty, 0); },
    total(code) { const off = { TEN: 0.1, HALF: 0.5 }[code] ?? 0; return +(this.subtotal() * (1 - off) * 1.2).toFixed(2); },
    receipt() { return lines.map((l) => `${l.qty} x ${l.name} @ ${l.price.toFixed(2)}`); },
  };
}
const c = cart().add("tea", 3.2).add("mug", 7.5, 2).add("tea", 3.2, 2).drop("nope");
console.log(c.receipt(), c.subtotal(), c.total(), c.total("TEN"), c.total("HALF"), c.total("BAD"));
console.log(c.drop("tea").receipt());
