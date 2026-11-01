// Word break with reconstruction.
const wb = (s, d) => { const w = new Set(d), r = [true]; for (let i = 1; i <= s.length; i++) for (let j = 0; j < i; j++) if (r[j] && w.has(s.slice(j, i))) { r[i] = true; break; } return !!r[s.length]; };
console.log(wb("leetcode", ["leet", "code"]), wb("applepenapple", ["apple", "pen"]), wb("catsandog", ["cats", "dog", "sand", "and", "cat"]));
const all = (s, d, m = new Map()) => { if (!s) return [""]; if (m.has(s)) return m.get(s); const o = []; for (const w of d) if (s.startsWith(w)) for (const t of all(s.slice(w.length), d, m)) o.push(t ? w + " " + t : w); m.set(s, o); return o; }; console.log(all("catsanddog", ["cat", "cats", "and", "sand", "dog"]), all("abcd", ["x"]));
