// split with regexes in many shapes.
console.log("a, b;c  d".split(/[,;\s]\s*/), "2024-03-15T10:20:30".split(/[-T:]/), "one1two22three".split(/\d+/), "one1two22three".split(/(\d+)/), "abc".split(/(?:)/), "abc".split(/b|/), "".split(/x/), "".split(/(?:)/), "aXbxc".split(/x/i), "a b c".split(/ /, 2));
console.log("CamelCaseHTTPServer".split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/), "k1=v1&k2=v2".split(/[&=]/), "a1b".split(/(\d)|x/), "  lead".split(/\s+/), "trail  ".split(/\s+/));
console.log("line1\r\nline2\nline3\rline4".split(/\r\n|\n|\r/), "The Cat".split(/\b/), "x".split(/x/), "xx".split(/x/), "abc".split("", 2));
