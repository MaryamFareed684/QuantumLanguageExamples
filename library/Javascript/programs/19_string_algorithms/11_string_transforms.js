// BWT, move-to-front and rotations of strings.
const bwt = (s) => { s += "$"; const r = [...s].map((_, i) => s.slice(i) + s.slice(0, i)).sort(); return r.map((x) => x.at(-1)).join(""); };
const un = (b) => { let t = Array(b.length).fill(""); for (let k = 0; k < b.length; k++) t = [...b].map((c, i) => c + t[i]).sort(); return t.find((x) => x.endsWith("$")).slice(0, -1); };
console.log(bwt("banana"), un(bwt("banana")), bwt("abracadabra"), un(bwt("mississippi")));
const mtf = (s) => { const a = [..."abcdefghijklmnopqrstuvwxyz$"]; return [...s].map((c) => { const i = a.indexOf(c); a.splice(i, 1); a.unshift(c); return i; }); }; console.log(mtf(bwt("banana")));
const isRot = (a, b) => a.length === b.length && (a + a).includes(b); console.log(isRot("waterbottle", "erbottlewat"), isRot("abc", "acb"));
const minRot = (s) => { let b = s; for (let i = 1; i < s.length; i++) { const r = s.slice(i) + s.slice(0, i); if (r < b) b = r; } return b; }; console.log(minRot("bbaaccaadd"), minRot("cab"));
