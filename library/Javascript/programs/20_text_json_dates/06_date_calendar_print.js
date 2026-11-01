// Printing a month calendar with UTC dates.
function cal(y, m) {
  const first = new Date(Date.UTC(y, m - 1, 1)), n = new Date(Date.UTC(y, m, 0)).getUTCDate(), cells = [...Array(first.getUTCDay()).fill("  "), ...Array.from({ length: n }, (_, i) => String(i + 1).padStart(2))];
  console.log(`${first.toLocaleString("en-US", { month: "long", timeZone: "UTC" })} ${y}`.padStart(16));
  console.log("Su Mo Tu We Th Fr Sa");
  for (let i = 0; i < cells.length; i += 7) console.log(cells.slice(i, i + 7).join(" "));
}
cal(2024, 2); cal(2023, 10);
