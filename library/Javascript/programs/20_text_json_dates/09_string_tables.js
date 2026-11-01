// Rendering aligned text tables and bar charts.
const data = [["Mercury", 57.9, 0], ["Venus", 108.2, 0], ["Earth", 149.6, 1], ["Mars", 227.9, 2], ["Jupiter", 778.6, 95]];
const hdr = ["Planet", "Dist", "Moons"], rows = [hdr, ...data.map((r) => r.map(String))], w = hdr.map((_, i) => Math.max(...rows.map((r) => r[i].length)));
const line = (l, m, r) => l + w.map((x) => "─".repeat(x + 2)).join(m) + r;
console.log(line("┌", "┬", "┐")); rows.forEach((r, i) => { console.log("│ " + r.map((c, j) => (j ? c.padStart(w[j]) : c.padEnd(w[j]))).join(" │ ") + " │"); if (!i) console.log(line("├", "┼", "┤")); }); console.log(line("└", "┴", "┘"));
const mx = Math.max(...data.map((r) => r[1])); for (const [n, v] of data) console.log(n.padEnd(8) + "█".repeat(Math.round((v / mx) * 30)) + " " + v);
