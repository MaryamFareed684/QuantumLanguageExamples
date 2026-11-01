// Converting globs to regexes and matching file names.
const glob = (g) => new RegExp("^" + g.replace(/[.+^${}()|\\]/g, "\\$&").replace(/\*\*\/?/g, "\u0000").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]").replace(/\u0000/g, "(?:.*/)?") + "$");
const files = ["a.js", "src/a.js", "src/x/b.js", "b.ts", "src/c.test.js", "README.md", "a.jsx"];
for (const g of ["*.js", "src/*.js", "**/*.js", "src/**/b.js", "?.ts", "*.{js}"]) console.log(g, files.filter((f) => glob(g).test(f)));
console.log(glob("src/*.js").source, glob("a.b").test("axb"));
