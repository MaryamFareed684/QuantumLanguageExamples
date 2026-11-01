// Parsing numbers, units and dates with regexes.
const num = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/; console.log(["1", "-1.5", ".5", "1.", "1e5", "1e", "abc", "+.5E-2", ""].map((s) => [s, num.test(s)]));
const dur = (s) => [...s.matchAll(/(\d+(?:\.\d+)?)\s*(h|m|s|ms)\b/g)].reduce((t, [, n, u]) => t + n * { h: 3600000, m: 60000, s: 1000, ms: 1 }[u], 0); console.log(dur("1h 30m"), dur("2.5s 100ms"), dur("nothing"));
const dates = "Due 3/14/2024, or 2024-03-15, or 14 Mar 2024".match(/\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2}|\d{1,2} [A-Z][a-z]{2} \d{4}/g); console.log(dates);
const sum = (s) => (s.match(/-?\d+(\.\d+)?/g) ?? []).reduce((a, b) => a + +b, 0); console.log(sum("a1 b-2 c3.5"), sum("none"));
