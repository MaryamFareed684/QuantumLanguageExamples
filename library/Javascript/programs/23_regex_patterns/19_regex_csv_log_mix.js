// Parsing CSV lines and Apache log lines with one regex each.
const csvRow = (l) => [...l.matchAll(/(?:^|,)(?:"((?:[^"]|"")*)"|([^,]*))/g)].map((m) => (m[1] !== undefined ? m[1].replace(/""/g, '"') : m[2]));
console.log(csvRow('a,"b,c",,"d ""q"" e",f'), csvRow(""), csvRow(",,"));
const L = '127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /a.gif HTTP/1.0" 200 2326 "-" "Mozilla/4.08"';
const re = /^(?<ip>\S+) \S+ (?<user>\S+) \[(?<time>[^\]]+)\] "(?<m>\w+) (?<path>\S+) [^"]*" (?<st>\d{3}) (?<sz>\d+|-) "(?<ref>[^"]*)" "(?<ua>[^"]*)"$/;
console.log({ ...L.match(re).groups }, +L.match(re).groups.st >= 400);
