// LZ77 and LZW compression round trips.
const lzw = (s) => { const d = new Map(); for (let i = 0; i < 256; i++) d.set(String.fromCharCode(i), i); let w = "", o = []; for (const c of s) { if (d.has(w + c)) w += c; else { o.push(d.get(w)); d.set(w + c, d.size); w = c; } } if (w) o.push(d.get(w)); return o; };
const unlzw = (a) => { const d = []; for (let i = 0; i < 256; i++) d[i] = String.fromCharCode(i); let w = d[a[0]], o = w; for (const k of a.slice(1)) { const e = d[k] ?? w + w[0]; o += e; d.push(w + e[0]); w = e; } return o; };
const T = "TOBEORNOTTOBEORTOBEORNOT"; console.log(lzw(T), unlzw(lzw(T)) === T, lzw(T).length, T.length);
const lz77 = (s) => { const o = []; let i = 0; while (i < s.length) { let bl = 0, bo = 0; for (let j = Math.max(0, i - 15); j < i; j++) { let l = 0; while (i + l < s.length - 1 && s[j + l] === s[i + l]) l++; if (l > bl) { bl = l; bo = i - j; } } o.push([bo, bl, s[i + bl]]); i += bl + 1; } return o; };
const un = (a) => a.reduce((o, [d, l, c]) => { for (let k = 0; k < l; k++) o += o[o.length - d]; return o + c; }, ""); console.log(lz77("abababac"), un(lz77("abababac")), un(lz77("aaaaaaab")));
