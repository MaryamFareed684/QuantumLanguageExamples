// Number formatting tables: widths, signs, exponents.
for (const x of [0, 1, -1, 0.5, 123.456, 1e6, 1e21, 1.5e-7, 2 ** 31, Number.MAX_SAFE_INTEGER]) console.log(String(x).padStart(20), x.toFixed(2).padStart(26), x.toExponential(3).padStart(12), x.toPrecision(4).padStart(12));
const bytes = (n) => { const u = ["B", "KB", "MB", "GB", "TB"]; let i = 0; while (n >= 1024 && i < 4) { n /= 1024; i++; } return `${n.toFixed(i ? 1 : 0)} ${u[i]}`; }; console.log([0, 512, 1024, 1536, 1048576, 5e9, 1e14].map(bytes));
const sig = (n) => (n >= 0 ? "+" : "") + n; console.log([1, -1, 0].map(sig), (5).toString().padStart(3, "0"), (-5).toString().padStart(3, "0"));
