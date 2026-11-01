// Template literals: multi-line, expressions, nesting and tags.
const a = 5, b = 10;
console.log(`sum ${a + b}, nested ${`inner ${a * b}`}, call ${[1, 2].map((x) => `<${x}>`).join("")}`);
console.log(`line one
line two\ttabbed \${escaped} \`tick\``);
function tag(strings, ...values) {
  return strings.raw.map((s, i) => s + (i < values.length ? `[${values[i]}]` : "")).join("");
}
console.log(tag`x=${a}, y=${b}\n!`);
console.log(String.raw`C:\new\table${1 + 1}`);
const upper = (st, ...v) => st.reduce((o, s, i) => o + s + (v[i] ?? "").toString().toUpperCase(), "");
console.log(upper`hello ${"world"} and ${"moon"}!`);
console.log(`${{}} ${[]} ${[1, 2]} ${null} ${undefined} ${() => 1} ${1 / 3}`);
