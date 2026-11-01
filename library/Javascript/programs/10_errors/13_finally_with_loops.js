// break, continue and return through finally.
function find(a, t) { for (const x of a) { try { if (x === t) return "found " + x; } finally { console.log("checked", x); } } return "none"; }
console.log(find([1, 2, 3], 2));
outer: for (const i of [1, 2]) { try { for (const j of [1, 2]) { try { if (j === 1) continue outer; console.log("x"); } finally { console.log("in", i, j); } } } finally { console.log("out", i); } }
let n = 0; while (true) { try { if (++n > 2) break; } finally { console.log("n", n); } }
const f = () => { for (;;) { try { return "r"; } finally { break; } } return "broke out"; }; console.log(f());
