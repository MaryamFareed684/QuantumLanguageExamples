// Stacks: balanced brackets, RPN and next greater element.
const bal = (s) => { const st = [], p = { ")": "(", "]": "[", "}": "{" }; for (const c of s) { if ("([{".includes(c)) st.push(c); else if (c in p && st.pop() !== p[c]) return false; } return !st.length; };
console.log(["()[]{}", "([)]", "{[]}", "(", ""].map(bal));
const rpn = (t) => t.split(" ").reduce((s, x) => { if (/^-?\d+$/.test(x)) s.push(+x); else { const b = s.pop(), a = s.pop(); s.push(x === "+" ? a + b : x === "-" ? a - b : x === "*" ? a * b : Math.trunc(a / b)); } return s; }, [])[0];
console.log(rpn("2 1 + 3 *"), rpn("4 13 5 / +"));
const nge = (a) => { const o = Array(a.length).fill(-1), s = []; a.forEach((v, i) => { while (s.length && a[s.at(-1)] < v) o[s.pop()] = v; s.push(i); }); return o; }; console.log(nge([2, 1, 2, 4, 3]));
