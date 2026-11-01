// Character classes, shorthands and quantifiers.
const T = "The year 1999, price $42.50! under_score";
console.log(T.match(/\d+/g), T.match(/\D+/g).length, T.match(/\w+/g), T.match(/\s/g).length, T.match(/[aeiou]/gi).length, T.match(/[^a-z\s]/gi), T.match(/\$\d+\.\d{2}/)[0]);
console.log("aaa".match(/a{2}/)[0], "aaaa".match(/a{2,3}/)[0], "a".match(/a{2,}/), "aaa".match(/a+?/)[0], "aaa".match(/a*?/)[0] === "", "<a><b>".match(/<.+>/)[0], "<a><b>".match(/<.+?>/)[0], "abc".match(/b?/)[0] === "", "color colour".match(/colou?r/g));
console.log("a\nb".match(/a.b/), "a\nb".match(/a.b/s)[0].length, "a1\nb2".match(/^\w/gm), "a1\nb2".match(/\d$/gm), "tab\t".match(/\t/).index, "x.y".match(/\./).index, "a-b".match(/[a\-z]+/)[0], "]".match(/[\]]/)[0], "^".match(/[\^]/)[0], "é".match(/\w/), "é".match(/\p{L}/u)[0]);
console.log("word boundary here".match(/\b\w/g), "wordy word".match(/\bword\b/).index, "ab cd".match(/\B./g), "  \t\n".match(/\s/g).length);
