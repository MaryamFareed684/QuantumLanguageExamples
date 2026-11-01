// An invoice with line items, tax, dates and totals.
const inv = { no: 1042, date: new Date(Date.UTC(2024, 4, 17)), to: "Acme Corp", items: [["Widget", 4, 3.5], ["Gadget (large)", 1, 19.99], ["Service fee", 2, 45]], tax: 0.0825 };
const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const L = (a, b, c, d) => a.padEnd(20) + String(b).padStart(5) + String(c).padStart(10) + String(d).padStart(11);
console.log(`Invoice #${inv.no}  ${inv.date.toISOString().slice(0, 10)}\nBill to: ${inv.to}\n${"=".repeat(46)}`);
console.log(L("Item", "Qty", "Price", "Amount")); let sub = 0;
for (const [n, q, p] of inv.items) { sub += q * p; console.log(L(n, q, usd.format(p), usd.format(q * p))); }
const tax = sub * inv.tax; console.log("-".repeat(46)); console.log(L("Subtotal", "", "", usd.format(sub))); console.log(L(`Tax ${(inv.tax * 100).toFixed(2)}%`, "", "", usd.format(tax))); console.log(L("Total", "", "", usd.format(sub + tax)));
const due = new Date(+inv.date + 30 * 864e5); console.log("Due", due.toISOString().slice(0, 10), due.toUTCString());
