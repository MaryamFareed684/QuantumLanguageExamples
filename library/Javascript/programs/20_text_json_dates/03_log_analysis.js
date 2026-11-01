// Parsing log lines with regexes and tallying levels.
const log = `2024-03-01 10:00:01 INFO  [web] started in 120ms
2024-03-01 10:00:05 WARN  [db] slow query 830ms
2024-03-01 10:01:11 ERROR [web] timeout after 5000ms
2024-03-01 10:02:00 INFO  [web] handled in 45ms
2024-03-01 10:02:40 ERROR [db] connection lost`;
const re = /^(\S+) (\S+) (\w+)\s+\[(\w+)\] (.*)$/;
const e = log.split("\n").map((l) => { const [, d, t, lv, src, msg] = re.exec(l); return { t, lv, src, msg, ms: +(msg.match(/(\d+)ms/)?.[1] ?? 0) }; });
const by = (k) => e.reduce((m, x) => ((m[x[k]] = (m[x[k]] || 0) + 1), m), {});
console.log(by("lv"), by("src"), e.filter((x) => x.lv === "ERROR").map((x) => x.msg), Math.max(...e.map((x) => x.ms)), e[0]);
