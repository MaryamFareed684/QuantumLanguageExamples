// Durations and calendar math with plain numbers.
const dim = (y, m) => [31, (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
console.log(dim(2024, 2), dim(1900, 2), [...Array(12).keys()].reduce((s, m) => s + dim(2023, m + 1), 0));
function zeller(y, m, d) { if (m < 3) { m += 12; y--; } const k = y % 100, j = Math.floor(y / 100); return (d + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7; }
console.log(["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"][zeller(2024, 2, 29)], ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"][zeller(2000, 1, 1)]);
const humanize = (s) => [[86400, "d"], [3600, "h"], [60, "m"], [1, "s"]].reduce(([o, r], [u, l]) => { const q = Math.floor(r / u); return [q ? o + q + l : o, r % u]; }, ["", s])[0];
console.log(humanize(90061), humanize(59), humanize(3600));
