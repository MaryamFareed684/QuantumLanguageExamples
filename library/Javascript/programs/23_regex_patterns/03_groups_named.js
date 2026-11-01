// Capturing, non-capturing and named groups, backreferences.
const d = /(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/.exec("on 2024-03-15 ok");
console.log(d.groups, d.groups.y, { ...d.groups }, Object.getPrototypeOf(d.groups), d.length, d.slice(1));
const { groups: { m, d: dd } } = d; console.log(m, dd, "2024-03-15".replace(/(?<y>\d+)-(?<m>\d+)-\d+/, "$<m>/$<y>"), "ab".replace(/(?<f>a)/, (...a) => JSON.stringify(a.at(-1))));
console.log(/(a)|(b)/.exec("b"), /(?:ab)+/.exec("ababx")[0], /(ab)+/.exec("abab")[1], /(a(b(c)))/.exec("abc"), /(\w)\1/.exec("hello")[0], /(?<q>['"]).*?\k<q>/.exec(`say "it's" ok`)[0], /(a)?b/.exec("b"));
console.log("aa bb cd".match(/(\w)\1/g), "abab".replace(/(a)(b)/g, "$2$1"), "x".replace(/(x)/, "[$1][$2][$&][$0]"), "john smith".replace(/(\w+) (\w+)/, (_, a, b) => `${b.toUpperCase()}, ${a}`), "aaa".lastIndexOf("a"), /(?<a>.)(?<b>.)?/.exec("x").groups);
