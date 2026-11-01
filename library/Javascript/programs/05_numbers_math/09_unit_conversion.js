// A table-driven unit converter.
const units = { m: 1, km: 1000, cm: 0.01, mi: 1609.344, ft: 0.3048, in: 0.0254 };
const convert = (v, from, to) => (v * units[from]) / units[to];
for (const [v, f, t] of [[1, "mi", "km"], [100, "cm", "in"], [5280, "ft", "mi"], [42.195, "km", "mi"]]) {
  console.log(`${v} ${f} = ${convert(v, f, t)} ${t} (${convert(v, f, t).toFixed(3)})`);
}
const secs = (s) => [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((x) => String(x).padStart(2, "0")).join(":");
console.log(secs(3661), secs(59), secs(86399));
