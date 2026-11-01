// itertools-style helpers: zip, chain, cycle, enumerate, chunk.
function* zip(...it) { const is = it.map((x) => x[Symbol.iterator]()); for (;;) { const r = is.map((i) => i.next()); if (r.some((x) => x.done)) return; yield r.map((x) => x.value); } }
function* chain(...it) { for (const x of it) yield* x; }
function* cycle(a) { for (;;) yield* a; }
function* enumerate(a, s = 0) { for (const v of a) yield [s++, v]; }
function* chunks(a, n) { let b = []; for (const v of a) { b.push(v); if (b.length === n) { yield b; b = []; } } if (b.length) yield b; }
const first = (it, n) => { const o = []; for (const v of it) { if (o.length >= n) break; o.push(v); } return o; };
console.log([...zip([1, 2, 3], "ab")], [...chain([1], "x", new Set([2]))], first(cycle([1, 2]), 5), [...enumerate("ab", 1)], [...chunks([1, 2, 3, 4, 5], 2)]);
