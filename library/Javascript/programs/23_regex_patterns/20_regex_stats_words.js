// Word classification by regex over a word list.
const ws = "apple banana cherry level radar stats noon civic hello 12321 a1b2 Mississippi".split(" ");
const c = { doubles: /(.)\1/, vowelStart: /^[aeiou]/i, digits: /^\d+$/, mixed: /^(?=.*\d)(?=.*[a-z])/i, threeVowels: /(?:[aeiou].*){3}/i, noVowels: /^[^aeiou]+$/i, sameEnds: /^(.).*\1$/i, palin3: /^(.)(.).?\2\1$/ };
for (const [k, r] of Object.entries(c)) console.log(k.padEnd(12), ws.filter((w) => r.test(w)).join(","));
console.log(ws.map((w) => w.replace(/[aeiou]/gi, (v) => v.toUpperCase())).slice(0, 3), ws.sort((a, b) => (b.match(/[aeiou]/gi) ?? []).length - (a.match(/[aeiou]/gi) ?? []).length)[0]);
