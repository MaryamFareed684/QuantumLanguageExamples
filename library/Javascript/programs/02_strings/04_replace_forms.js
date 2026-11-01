// replace and replaceAll with strings, regexes, groups and functions.
const s = "cat bat rat cat";
console.log(s.replace("cat", "dog"), s.replaceAll("cat", "dog"), s.replace(/cat/g, "dog"), s.replace(/[bc]at/g, "<$&>"));
console.log("John Smith".replace(/(\w+) (\w+)/, "$2, $1"), "x".replace("x", "$$"), "abc".replace("b", "[$`|$']"));
console.log("3 + 4".replace(/\d+/g, (d) => d * 2), "a-b-c".replace(/-(.)/g, (m, c, off) => c.toUpperCase() + off));
console.log("2024-03-15".replace(/(?<y>\d+)-(?<m>\d+)-(?<d>\d+)/, "$<d>/$<m>/$<y>"));
console.log("aaa".replace(/a/, "b"), "aaa".replace(/a/g, "b"), "AbC".replace(/b/i, "x"), "tEsT".replace(/[a-z]/g, (c) => c.toUpperCase()));
console.log("no match".replace(/z/g, "y"), "".replace(/^/, "start"), "abc".replace(/(?:)/g, "-"));
