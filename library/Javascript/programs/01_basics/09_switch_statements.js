// switch with fallthrough, default placement and strict matching.
function season(month) {
  switch (month) {
    case 12: case 1: case 2: return "winter";
    case 3: case 4: case 5: return "spring";
    case 6: case 7: case 8: return "summer";
    case 9: case 10: case 11: return "autumn";
    default: return "unknown";
  }
}
for (const m of [1, 4, 7, 10, 13]) console.log(m, season(m));
function trace(x) {
  const log = [];
  switch (x) {
    case 1: log.push("one");
    case 2: log.push("two"); break;
    default: log.push("default");
    case 3: log.push("three");
  }
  return log.join(",");
}
for (const x of [1, 2, 3, 4, "1"]) console.log(JSON.stringify(x), trace(x));
switch (true) {
  case 5 > 10: console.log("no"); break;
  case 5 > 1: console.log("yes"); break;
}
