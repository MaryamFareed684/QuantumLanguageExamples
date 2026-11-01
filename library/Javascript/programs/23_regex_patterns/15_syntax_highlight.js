// A toy syntax highlighter that marks tokens with tags.
const rules = [["com", /\/\/.*$/m], ["str", /"[^"]*"|'[^']*'/], ["kw", /\b(?:const|let|function|return|if|else|for)\b/], ["num", /\b\d+(?:\.\d+)?\b/], ["id", /\b[A-Za-z_]\w*(?=\()/]];
const master = new RegExp(rules.map(([n, r]) => `(?<${n}>${r.source})`).join("|"), "gm");
const hl = (s) => s.replace(master, (m, ...a) => { const g = a.at(-1); const k = Object.keys(g).find((x) => g[x] !== undefined); return `<${k}>${m}</${k}>`; });
console.log(hl(`const x = 42; // the answer\nfunction f(a) { return g("str", 'c') + 3.5; }`));
console.log(master.source.length, master.flags);
