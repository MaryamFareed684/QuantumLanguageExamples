// Node streams: Readable.from, Transform and pipeline.
const { Readable, Transform, Writable, pipeline } = require("stream");
const up = new Transform({ objectMode: true, transform(c, _, cb) { cb(null, String(c).toUpperCase()); } });
const got = []; const sink = new Writable({ objectMode: true, write(c, _, cb) { got.push(c); cb(); } });
pipeline(Readable.from(["a", "b", "c"]), up, sink, (e) => console.log(e ?? "ok", got));
(async () => { const o = []; for await (const c of Readable.from([1, 2, 3])) o.push(c * 2); console.log(o); })();
const r = Readable.from(["x", "y"]); r.on("data", (c) => console.log("data", c)); r.on("end", () => console.log("end"));
const b = new Readable({ read() { this.push("chunk"); this.push(null); } }); b.setEncoding("utf8"); b.on("data", (c) => console.log(c, typeof c));
