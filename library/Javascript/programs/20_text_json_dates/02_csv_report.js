// Parsing CSV text into records and summarizing by column.
const csv = `date,region,units,price
2024-01-05,north,10,2.50
2024-01-06,south,3,10.00
2024-02-01,north,7,2.50
2024-02-03,east,12,1.25`;
const [head, ...lines] = csv.split("\n").map((l) => l.split(","));
const recs = lines.map((l) => Object.fromEntries(l.map((v, i) => [head[i], isNaN(v) ? v : +v])));
console.log(recs[0]);
const sum = recs.reduce((m, r) => { m[r.region] = (m[r.region] ?? 0) + r.units * r.price; return m; }, {}); console.log(sum);
const month = recs.reduce((m, r) => { const k = r.date.slice(0, 7); (m[k] ||= []).push(r.units); return m; }, {}); console.log(month);
console.log(Object.entries(sum).map(([k, v]) => `${k.padEnd(6)}|${v.toFixed(2).padStart(7)}`).join("\n"));
