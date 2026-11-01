// Event sourcing: rebuilding state by folding events.
const events = [{ t: "open", id: "A", amt: 100 }, { t: "open", id: "B", amt: 0 }, { t: "xfer", from: "A", to: "B", amt: 30 }, { t: "dep", id: "B", amt: 5 }, { t: "close", id: "A" }, { t: "xfer", from: "B", to: "C", amt: 1 }];
const apply = (s, e) => { switch (e.t) { case "open": return { ...s, [e.id]: e.amt }; case "dep": return { ...s, [e.id]: s[e.id] + e.amt }; case "xfer": return e.to in s ? { ...s, [e.from]: s[e.from] - e.amt, [e.to]: s[e.to] + e.amt } : s; case "close": { const { [e.id]: _, ...r } = s; return r; } } };
console.log(events.reduce(apply, {})); const snaps = events.reduce((h, e) => [...h, apply(h.at(-1), e)], [{}]); console.log(snaps.length, snaps[3], snaps.at(-1) === snaps.at(-2));
const at = (n) => events.slice(0, n).reduce(apply, {}); console.log(at(2), at(4)); console.log(events.filter((e) => e.t === "xfer").map(({ from, to, amt }) => `${from}->${to}:${amt}`));
