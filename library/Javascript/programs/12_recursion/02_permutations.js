// All permutations of a string, with duplicates removed.
const perms = (s) => (s.length < 2 ? [s] : [...new Set([...s].flatMap((c, i) => perms(s.slice(0, i) + s.slice(i + 1)).map((p) => c + p)))]);
console.log(perms("abc"), perms("aab"), perms("abcdef").length, perms("").length);
