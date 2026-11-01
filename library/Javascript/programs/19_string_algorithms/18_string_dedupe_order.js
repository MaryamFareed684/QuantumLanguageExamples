// Removing duplicates while keeping order and smallest forms.
const rm = (s) => { const c = {}; for (const x of s) c[x] = (c[x] || 0) + 1; const st = [], in_ = {}; for (const x of s) { c[x]--; if (in_[x]) continue; while (st.length && st.at(-1) > x && c[st.at(-1)]) in_[st.pop()] = false; st.push(x); in_[x] = true; } return st.join(""); }; console.log(rm("bcabc"), rm("cbacdcbc"));
const adj = (s) => { const st = []; for (const c of s) st.at(-1) === c ? st.pop() : st.push(c); return st.join(""); }; console.log(adj("abbaca"), adj("azxxzy"), JSON.stringify(adj("aa")));
const kd = (s, k) => { const st = []; for (const c of s) { if (st.at(-1)?.[0] === c) { if (++st.at(-1)[1] === k) st.pop(); } else st.push([c, 1]); } return st.map(([c, n]) => c.repeat(n)).join(""); }; console.log(kd("deeedbbcccbdaa", 3));
console.log([..."mississippi"].filter((c, i, a) => a.indexOf(c) === i).join(""), [...new Set("mississippi")].join(""));
