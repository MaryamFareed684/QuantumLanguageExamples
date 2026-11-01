// Greedy, lazy, alternation order and backtracking results.
console.log(/a|ab/.exec("abc")[0], /ab|a/.exec("abc")[0], /(a+)(a+)/.exec("aaaa").slice(1), /(a+?)(a+)/.exec("aaaa").slice(1), /(a*)(b*)/.exec("xx").slice(0), /^(a+)+$/.test("aaaaaaaaaa"), /(a|b)*c/.exec("ababc")[1], /(?:(a)|b)+/.exec("ab"), /(z)((a+)?(b+)?(c))*/.exec("zaacbbbcac"));
console.log("aaa".replace(/a*/g, "x"), "baaac".replace(/a*/g, "x"), "abc".replace(/x*/g, "-"), "aaa".match(/a*?/g), "😀".replace(/(?:)/g, "-"), "😀".replace(/(?:)/gu, "-"), "ab".split(/(?:)/u));
console.log(/\1(a)/.exec("aa")[0], /(a)\2/.test("a\u0002"), /\k<x>/.test("k<x>"), /[\b]/.test("\b"), /\cA/.test("\u0001"), /\0/.test("\0"), /\x41/.test("A"), /A/.test("A"), /a{,2}/.test("a{,2}"), /a{1/.test("a{1"), /]/.test("]"), /{/.test("{"));
