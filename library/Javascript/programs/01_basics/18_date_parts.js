// Day of week and day of year computed with UTC dates.
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (const [y, m, d] of [[2000, 1, 1], [2024, 2, 29], [1969, 7, 20], [2038, 1, 19]]) {
  const t = new Date(Date.UTC(y, m - 1, d));
  const start = Date.UTC(y, 0, 1);
  const yday = (t.getTime() - start) / 86400000 + 1;
  console.log(t.toISOString().slice(0, 10), days[t.getUTCDay()], "day", yday);
}
const later = new Date(Date.UTC(2024, 0, 31));
later.setUTCMonth(1);
console.log(later.toISOString());
console.log(new Date("2024-03-15T12:30:00Z").getTime(), new Date(0).getUTCFullYear());
