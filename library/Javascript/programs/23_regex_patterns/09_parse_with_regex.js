// Extracting structured data from free text.
const text = `Contact: Jane Doe <jane@ex.org>, +1-555-0100
Ship to 42 Main St, Springfield, IL 62704 on 2024-06-01
Order #A-1001: 3 x widget @ $4.50; 1 x gizmo @ $19.99`;
console.log(text.match(/<([^>]+)>/)[1], text.match(/\+[\d-]+/)[0], text.match(/\b[A-Z]{2} (\d{5})\b/).slice(0, 2), text.match(/\d{4}-\d{2}-\d{2}/)[0], text.match(/#(\S+):/)[1]);
const items = [...text.matchAll(/(\d+) x (\w+) @ \$([\d.]+)/g)].map(([, q, n, p]) => ({ n, q: +q, p: +p })); console.log(items, items.reduce((s, i) => s + i.q * i.p, 0).toFixed(2));
const kv = Object.fromEntries("a=1; b = two ;c=3.5".split(/\s*;\s*/).map((p) => p.split(/\s*=\s*/))); console.log(kv);
const lineRe = /^(?<verb>GET|POST) (?<path>\S+) HTTP\/(?<ver>[\d.]+)$/; console.log("GET /index.html HTTP/1.1".match(lineRe).groups, "BAD /".match(lineRe));
