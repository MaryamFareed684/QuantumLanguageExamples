// Thousands separators, currency, ordinals and percent strings.
const commas = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
for (const n of [1, 12, 1234, 1234567, 1000000000]) console.log(commas(n));
const money = (n) => "$" + commas(n.toFixed(2).split(".")[0]) + "." + n.toFixed(2).split(".")[1];
console.log(money(1234.5), money(0.075), money(99999.999));
function ordinal(n) {
  const t = n % 100;
  if (t >= 11 && t <= 13) return n + "th";
  return n + (["th", "st", "nd", "rd"][n % 10] || "th");
}
console.log([1, 2, 3, 4, 11, 12, 13, 21, 22, 101, 111].map(ordinal).join(" "));
console.log((0.1234).toFixed(1), (12.5).toFixed(0), (13.5).toFixed(0), (1.45).toFixed(1), (1.55).toFixed(1), (1000).toExponential());
