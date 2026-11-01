// Iterating paged data lazily with call counts.
const pages = [[1, 2], [3, 4], [5]];
let fetches = 0;
const fetchPage = (i) => { fetches++; return pages[i] ?? []; };
function* all() { for (let i = 0; ; i++) { const p = fetchPage(i); if (!p.length) return; yield* p; } }
for (const v of all()) { if (v > 3) break; console.log(v); }
console.log(fetches); fetches = 0;
console.log([...all()], fetches);
